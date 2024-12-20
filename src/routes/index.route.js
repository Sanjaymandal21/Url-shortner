//import express..
import express from "express";
import userRouter from "./user.route.js";
import urlRouter from "./url.route.js";

// Create Router..
const indexRouter = express.Router()
indexRouter.use("/api/v1/users",userRouter);
indexRouter.use("/api/v1/urls",urlRouter);

//export..
export default indexRouter;


