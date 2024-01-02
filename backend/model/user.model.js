import monogoose from 'mongoose'
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = await monogoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true,
        minLength: [5, "Name must be at least 5 char"],
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    bio:{
        type: String,
    }
}, { timestamps: true
})

// generate token 
userSchema.methos.generateAuthToken = {
    function(){
        return JWT.sign({
            _id: this.id,
            email: this.email,
            username: this.username
        },

        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: '24h'
        }
        )
    }
}

// hash password
userSchema.pre("save", async function(next){
    if(!this.isModified('password')) return next()
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch (error) {
        console.log(error.message)
        next(error);
    }
})

export const User = monogoose.model("User", userSchema);