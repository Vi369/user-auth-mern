//authentication :  verify that user authorised or not 
import {User} from '../model/user.model.js'
import JWT from 'jsonwebtoken'

// const verifyJWT = async(req,res,next)=>{
   
//     try {
//         const token = req.cookies?.accessToken || req.header("Authorization")?.replace("bearer",""); 
//         console.log(token)
//         if(!token){
//             return res.status(400).json({ error: 'User not authorised' })
//         }
//         const payload = JWT.verify(token,process.env.ACCESS_TOKEN_SECRET);
//         const user = await User.findById(payload?._id)
//         console.log(user)
//         if(!user){
//             return res.status(404).json({ error: 'user not exists' })
//         }
//         return res.status(200).json({
//             message: "user Authorised",
//             username: user.username,
//             email: user.email,
//             bio: user.bio
//         })
//     } catch (error) {
//         console.log(error.message)
//         next(error)
//     }
// }


const verifyJWT = async(req,res,next) =>{
    const token = req.cookies?.token || null
    if(!token) return res.status(404).send({msg:"user authentication failed",token:req.cookies})
    try {
        const payload =  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = { id: payload.id, username: payload.username };
        next()
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
}

export {
    verifyJWT
}