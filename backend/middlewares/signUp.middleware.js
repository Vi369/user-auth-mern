import emailValidator from 'email-validator'
import { User } from '../model/user.model.js';

const signUpValidator = async(req,res,next)=>{
    const {fullName,email,password,username} = req.body;
    
    try {
        if (!fullName || !email || !password || !username) {
            return res.status(400).json({
                success: false,
                message: 'Every field id required'
            }) 
        }
        // email check
       const isValidEmail =  emailValidator.validate(email)
       if(!isValidEmail){
        return res
        .status(400)
        .json({
            success: false,
            message: "Invalid email"
        })
       }
       // user already exit
       const isUserAlreadyPresent = await User.findOne({ email });
        if (isUserAlreadyPresent) {
            return res.status(400).json({
                success: false,
                message: 'User already present'
            });
        }
        next()
    } catch (error) {
        console.log(error.message)
        next(error)
    }

}

export {
    signUpValidator
}