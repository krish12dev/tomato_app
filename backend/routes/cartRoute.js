import express from "express"
import { addToCart,removeToCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart)
cartRouter.post("/remove", removeToCart)
cartRouter.post("/get",authMiddleware, getCart)

export default cartRouter