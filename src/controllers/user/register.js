import {User} from "../../models/user.model.js"
import bcrypt from "bcrypt"
import ApiResponse from "../../utils/ApiResponse.js"
const registerUser = async (req,res)=>{
    try {
       //distructure field..
       const {name,email,password} = req.body;

       //checks if the fields are missing
       if(!name|| !email|| !password){
        return res.status(400).send(new ApiResponse(400,null,"Fields are Missing"))
       }
       //409 conflict.
       const existingUser=await User.findOne({email})
       if(existingUser){
        return res.status(409).send(new ApiResponse(409,null,"User already exists"))

       }
       //hashed the password..
       const hashedPassword= await bcrypt.hash(password,10)

        //store in Db..
        const result= await User.create({
            name,
            email,
            password:hashedPassword
        })
        // send code 201..
        res.status(201).send (new ApiResponse(201,result,"Register Sucessfully."))

    } catch (error) {
      console.log(error)
      res.status(500).res.send(new ApiResponse(500,error,"Failed to register"))  
    }
};
export default registerUser;