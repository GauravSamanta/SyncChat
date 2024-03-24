import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getallusers } from "../controllers/user.controller.js";
const router=express.Router();


router.get('/getallusers',protectRoute,getallusers);


export default router;