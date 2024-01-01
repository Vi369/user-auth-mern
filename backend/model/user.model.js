import monogoose from 'mongoose'

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

export const User = monogoose.model("User", userSchema);