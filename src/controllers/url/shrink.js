import { Url } from "../../models/url.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import crypto from "crypto"
export const shrinkUrl =async (req,res)=>{
    try {
        const{original}=req.body;
        if(!original){
            return res.status(400).send(new ApiResponse(400,null,"Required fields are Missing"))
        }
        let sid= crypto.randomBytes(3).toString("hex");
        let existingUrl =await Url.findOne({
            shortId:sid,
        })
        while(existingUrl){
            let sid= crypto.randomBytes(3).toString("hex")
            let existingUrl= await Url.findOne({
                shortId: sid,
            })
        }
        const createdUrl= await Url.create({
            original,
            shortId: sid,
        })
        res.status(201).send(new ApiResponse(201,createdUrl,"Url Shrink Sucessfully."))

    } catch (error) {
       console.log(error)
       res.status(500).send(new ApiResponse(500,error,"Failed to short url")) 
    }
}