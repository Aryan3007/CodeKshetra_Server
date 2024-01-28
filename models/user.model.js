import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastname: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    followers: {
      type: [String],
      default: [],   
    },
    description:String,
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
