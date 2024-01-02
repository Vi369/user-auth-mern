import { asyncHandler } from "../utils/asyncHandler";
import {User} from '../model/user.model.js'
// user sing up 

const signUp  = asyncHandler( async(req,res)=>{
    try {
        const user = await User.create(req.body);
        return res
        .status(200)
        .json({
            user,
            message: "user sign-Up successfully !!"
        })
    } catch (error) {
        return res
        .status(501)
        .json({
            message: error.message
        })

    }

})


// user login

const signIn = asyncHandler(async(req, res)=>{
    const {username, email, password} = req.body;
    const user = await User.findOne({
        $or: [{username}, {email}]
    }).select("+password")

    if(user && (user.username || user.email)){
        const isPasswordCorrent = bcrypt.compare(password, user.password)
        if(isPasswordCorrent){
           const token =  await user.generateAuthToken()

           res.cookie("token", token, {
            maxAge: 24*60*60*1000,
            httpOnly: true
           })
           return res
           .status(200)
           .json({
            success: true,
            data: user,
            message: "user login successfully !!"
           })
        } else{
           return res.status(404)
            json({
                success: false,
                message: "incorrect password try again"
            })
        }
    }else{
       return res.status(404)
       .json({
        message: "no account associate with this username or email"
       })
    }

})


export {
    signUp,
    signIn
}