import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    photo: {
      data: Buffer,
      contentType: String,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("PostModel", postSchema);