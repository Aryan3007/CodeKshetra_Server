import express  from "express";
import { getWeburlsController, weburlsController } from "../controllers/dashboardController.js";

const dashboardRoute=express.Router()

//web url route
dashboardRoute.post('/sendweburls', weburlsController)
dashboardRoute.get('/weburls', getWeburlsController)

export default dashboardRoute