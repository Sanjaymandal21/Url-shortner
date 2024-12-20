// import mongoose
import mongoose from "mongoose";
//create schema
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type : String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
},
{timestamps: true});
 //expot
 export const User= mongoose.model("User",userSchema)