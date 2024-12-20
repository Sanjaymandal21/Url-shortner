// next is a function

import ApiResponse from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
export const checkIsLoggedIn=(req,res,next)=>{
    const bearerAuth=req.headers.authorization

    if(!bearerAuth){
        return res.status(400).send(new ApiResponse(400,null,"missing bearer suth header"))
    }

    const token=bearerAuth.split(" ")[1]

    if(!token){
        return res.status(400).send(new ApiResponse(400,null,"missing token"))
    }

    const decodedInformation=jwt.verify(token,process.env.TOKEN_SECRET)

    if(!decodedInformation){
        res.status(400)
    }
    req.user=decodedInformation
 next();

}