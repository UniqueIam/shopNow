import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiray:Date,
    verifyToken:String,
    verifyTokenExpiray:Date
})

const user = mongoose.model.users || mongoose.model('users',userSchema);

export default user;