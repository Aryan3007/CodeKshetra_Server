import ReportModel from "../models/report.model.js";
// import Report from "../models/report.model.js";

export const weburlsController = async (req, res) => {
    
  try {
      const { url, username, active, count } = req.body;

    // Check if both url and username are provided
    if (!url || !username) {
      return res.status(500).json({
        success: false,
        message: "All fields required",
      });
    }

    // Create a new instance of the Report model
    const newReport = new ReportModel({
      username,
      url,
      active,
      count
    });

    // Save the new report to the database
    await newReport.save();

    // Respond with success status and message
    res.status(200).json({
      success: true,
      message: "Report created successfully",
    });
  } catch (error) {
    // Handle errors and respond with an error status and message
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in creating report",
    });
  }
};



export const getWeburlsController=async(req, res)=>{
  try {
      const reports= await ReportModel.find({})
      
      res.status(200).json({
          success:true,
          message:"all report list",
          reports
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).json({
          message:"error while getting all reports"
      })
  }
}


export const deleteWeburlsController = async (req, res) => {
  
  const { id } = req.body;
try {
  const post = await ReportModel.findById(id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "post with given id not found",
    });
  }

  await ReportModel.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: " post deleted",
  });
} catch (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message: "post not found",
    error: error,
  });
}

};