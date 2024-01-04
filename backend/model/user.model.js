import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "username required"],
        unique: [true, "username must be unique"],
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: [true, "Email must be required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName:{
        type: String,
        required: [true, "Name must be required"],
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    bio:{
        type: String
    }
}, {timestamps: true})

userSchema.pre("save", async function(next){
    // check the password is modifeid or not
    if(!this.isModified('password')) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch ({error}) {
        console.log(error.message)
        next(error)
    }
})

//password check
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// generate access token
userSchema.methods.generateAccessToken = function(){
    return JWT.sign(
        {
        _id: this._id,
        username: this.username,
        email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: '24h'
    }
)}
export const User = mongoose.model("User", userSchema);