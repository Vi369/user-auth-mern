import bcrpt from 'bcrypt'
const signInValidator = async(req,res,next)=>{
    const {username, password} = req.body;

    try {
        // Check if any field is missing
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required.' });
        }
        // find the user by 
        const user = await userModel.findOne({ username });
    
        if(!user){
            return res.status(400).json({ error: 'User not exists' });
        }
        // check password
        const isPasswordCorrect = await user.isPasswordCorrect(password)
        if(!isPasswordCorrect){
            return res.status(400).json({ error: 'password is not correct try again.' });
        }
        next()
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}

export {
    signInValidator
}