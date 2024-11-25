import express from "express"
import { registerIt } from "../control/data.js"
export const router = express.Router()
router.post("/register", registerIt)