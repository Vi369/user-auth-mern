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
const signIn = ()=>{
    const {username,password} = req.body;
    try {
        
    } catch (error) {
        res.status(404).send({message:"No Account Found Associated with this username"})
    }
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