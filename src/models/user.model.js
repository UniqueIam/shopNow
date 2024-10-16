import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

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
    }
})

const user = mongoose.model.user || mongoose.model('users',userSchema);

export default user;