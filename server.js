import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoute from "./routes/dashboardRoute.js";
import authRouter from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
// import postRoutes from "./routes/postRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//connect to database
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb ${connect.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};
connectDB();

//app routes
app.use('/auth', authRouter)
app.use("/dashboard", dashboardRoute)
app.use('/post', postRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
