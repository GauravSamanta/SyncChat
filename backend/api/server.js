import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

import authRoutes from "../routes/auth.routes.js";
import messageRoutes from "../routes/message.routes.js";
import userRoutes from "../routes/user.routes.js";
import { connectToMongoDB } from "../DB/connectToMongoDB.js";

const PORT=process.env.PORT || 3000;


dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
   connectToMongoDB(); 
  console.log("Server is running on port 3000");
});
