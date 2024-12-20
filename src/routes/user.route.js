//import express..

import express from "express"
import userController from "../controllers/user.controller.js";

//creater router..
 const userRouter = express.Router()
 userRouter.post("/register",userController.register)
 userRouter.post("/login",userController.login)

 //export..
 export default userRouter;