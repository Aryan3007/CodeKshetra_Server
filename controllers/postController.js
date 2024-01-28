import postModel from "../models/post.model.js";
import { User } from "../models/user.model.js";
import fs from "fs";

export const createPostController = async (req, res) => {
    try {
      const { caption, userId } = req.fields;
      const uploadedPhoto = req.files.photo;
  
      // Validation
      switch (true) {
        case !caption:
          return res.status(500).send({ error: "caption is Required" });
        case !userId:
          return res.status(500).send({ error: "userId is Required" });
    
        case uploadedPhoto && uploadedPhoto.size > 1000000:
          return res
            .status(500)
            .send({ error: "photo is Required and should be less than 1mb" });
      }
  
      const user = await User.findById(userId);
  
      const post = new postModel({
        userId,
        firstname: user.firstname,
        lastname: user.lastname,
        caption,
        uploadedPhoto,
        location: user.location,
      });
  
      // File handling
      if (uploadedPhoto) {
        post.photo.data = fs.readFileSync(uploadedPhoto.path);
        post.photo.contentType = uploadedPhoto.type;
      }
  
      await post.save();
  
      res.status(201).send({
        success: true,
        message: "Post Created Successfully",
        post,
      });
    } catch (error) {
      console.error("Error creating post:", error.message);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating post",
      });
    }
  };

  
export const getPostController = async (req, res) => {
    try {
      const posts = await postModel.find({});
  
      res.status(201).send({
        success: true,
        message: "all post founded Successfully",
        posts,
      });
    } catch (error) {
      console.error("Error in finding post:", error.message);
      res.status(500).send({
        success: false,
        error,
        message: "Error in finding post",
      });
    }
  };
  
  export const getPostPhotoController = async (req, res) => {
    try {
      const postphoto = await postModel.findById(req.params.pid).select("photo");
  
      if (!postphoto) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      const { photo } = postphoto;
  
      if (photo && photo.data) {
        res.set("Content-type", photo.contentType);
        res.set("Content-Length", photo.data.length);
        return res.status(200).send(photo.data);
      } else {
        return res.status(404).json({
          success: false,
          message: "Product photo not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error while finding product photo",
      });
    }
  };
  