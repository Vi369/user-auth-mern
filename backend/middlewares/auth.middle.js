//authentication :  verify that user authorised or not 

import JWT from 'jsonwebtoken'
const verifyJWT = (req,res,next)=>{
    const token = req.cookies?.token || null

    if(!token){
        return res.status(400).json({ error: 'User not authorised' })
    }

    try {
        const payload = JWT.verify(token,process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({
            message: "user Authorised",
            username: payload.username,
            email: payload.email,
            bio: payload.bio
        })
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

export {
    verifyJWT
}