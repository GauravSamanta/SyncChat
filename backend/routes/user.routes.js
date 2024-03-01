import express from "express";
import protectRoute from "../middlewares/protectRoute";
import { getallusers } from "../controllers/user.controller";
const router=express.Router();


router.get('/getallusers',protectRoute,getallusers);


export default router;