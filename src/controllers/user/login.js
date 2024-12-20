import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";
const loginUser= async (req,res)=>{
    try {
        //distructure.
        const{email,password} =  req.body;
        //checks fields..
        if(!email|| !password){
            return res.status(400).send(new ApiResponse(400,null,"Required Fields are Missing"))
        }
        //conflits
        const existingUser= await User.findOne({
            email
        });
        //404 not found
        if(!existingUser){
            return res.status(404).send(new ApiResponse(404,null,"User doesnot exist."))
        }
        const verified= await bcrypt.compare(password,existingUser.password)
        if(!verified){
            return res.status(404).send(new ApiResponse(404,null,"Invalid credentials"))
        }
        const token= jwt.sign({
            name:existingUser.name,
            email: existingUser.email,
            _id:existingUser._id
        },process.env.TOKEN_SECRET,{expiresIn:"1d"})
        res.status(201).send(new ApiResponse(201,token,"Login Sucessful"))
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(500,error,"Failed to Login."))
    }
}
export default loginUser;