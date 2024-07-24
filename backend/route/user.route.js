import express from "express";
import { Login, signup } from "../Controller/user.controller.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", Login);
export default router;
