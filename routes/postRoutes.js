import express from "express";
import { createPostController, getPostController, getPostPhotoController} from "../controllers/postController.js";
import formidable from "express-formidable";
const postRoutes = express.Router();

postRoutes.post(
  "/create-post",
  formidable(),
  createPostController
);

postRoutes.get(
  "/getall-post",
  getPostController
);


//get photo of user Route
postRoutes.get(
    '/post-photo/:pid',
    getPostPhotoController
  );
  

// //get user post Route
// postRoutes.get(
//     '/all-posts/:userId',
//     getUserPostController
//   );
    

// //delete post Route
// postRoutes.delete(
//     '/delete-post',
//     deletePostController
//   );
  

// //like post Route
// postRoutes.post(
//     '/like-post',
//     likePost
//   );
  


export default postRoutes;
