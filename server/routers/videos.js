import express from "express"
import {} from "../controllers/video.js"

const router = express.Router()

router.get("/t", test)

export default router