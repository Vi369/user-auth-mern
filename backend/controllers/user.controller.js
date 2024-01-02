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
    })

    // generate token
    
    return res
    .status(200)
    .json({
        success: true,
        message: "user login successfully !!"
    })
})


export {
    signUp,
    signIn
}