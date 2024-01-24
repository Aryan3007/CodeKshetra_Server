import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  active:{
    type : Boolean ,
    default : true
  },
  count: {
    type: String,
    required: true,
  },

}, { timestamps: true });

// Create a model using the schema
const ReportModel = mongoose.model("ReportModel", reportSchema);

export default ReportModel;