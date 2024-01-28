import express  from "express";
import { deleteWeburlsController, getWeburlsController, weburlsController } from "../controllers/dashboardController.js";

const dashboardRoute=express.Router()

//web url route
dashboardRoute.post('/sendweburls', weburlsController)
dashboardRoute.get('/weburls', getWeburlsController)
dashboardRoute.delete('/deleteReport', deleteWeburlsController)

export default dashboardRoute