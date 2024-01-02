import User from '../model/user.model.js'

//signUp 
const signUp = async(req,res)=>{
    try {
        await User.create(req.body);
        res.status(200).json({
            message: 'User registered successfully.'
        });
    } catch (error) {
        res.status(501).json({
            error: e.message
        });
    }
}

//sign in 
const signIn = async(req,res)=>{
    const {username,password} = req.body;

    const user = await User.findOne({username}).select('+email')
    
    // generate token and success respone

    const token = await user.generateAccessToken()

    if(!token){
        res.status(500).json({
            error: "While generating token error"
        });
    }

    const options = {
        httpOnly: true,
        maxAge: 12*60*60*1000 // 12 hours
    }

    return res
    .status(200)
    .cookie("token", token, options)
    .json({
        success: true,
        message: 'User Login successful' 
    })
}
//get User
const getUser = async(req,res)=>{
   try {
     const userData = await User.findOne({username});
         res.status(200).send({
             message:"Success",
             data:userData
         })
   } catch (error) {
    res.status(501).send({message:error.message})
   }
}

export {
    signUp,
    signIn,
    getUser
}