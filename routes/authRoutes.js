import express from "express"
import { loginUserController, registerController } from "../controllers/authController.js"
import formidable from "express-formidable";
const authRouter=express.Router()

authRouter.post("/register", registerController)
authRouter.post("/login", loginUserController)

//get photo of Product Route
// authRouter.get(
//     '/profile-photo/:pid',
//     getProfilePhotoController
//   );
  

export default authRouter