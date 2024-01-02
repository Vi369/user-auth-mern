// signUpPageValidator

const signUpPageValidator = (req,res,next)=>{
    const {name,email,password,bio,username} = req.body;

    if(req.body && name && email && password && bio && username){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}

//sign in page validatot 
const signInPageValidator = (req,res,next)=>{
    const {username,password, email} = req.body;
    if(req.body && (username || email) && password){
        next()
    }else{
        res.status(404).send({msg:"All input fields are required"})
    }
}


export {
    signUpPageValidator,
    signInPageValidator
}