// const express = require("express")
// const cors = require("cors")
import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/OrderRouter.js";

// app config
const app = express();
const port = 4000;

// db connection
connectDB();

//middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get('/',(req,res)=>{
    res.send("welcome to tomato app")
})

app.listen(port,()=>{
    console.log("server connected")
})