import loginUser from "./user/login.js";
import registerUser from "./user/register.js";

const userController={
    register: registerUser,
    login : loginUser
}
export default userController;
