//import express..
import express from "express"
import urlController from "../controllers/url.controller.js";
import { checkIsLoggedIn } from "../middlewares/auth.middleware.js";

//create router.
const urlRouter = express.Router()
urlRouter.route("/shrink").post(checkIsLoggedIn, urlController.shrink)
urlRouter.route("/redirect/:id").get(urlController.redirect)
urlRouter.route("/views/:id").get(urlController.views)

//export.

export default urlRouter;