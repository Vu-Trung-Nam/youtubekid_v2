import express from "express"
import {test} from "../controllers/user.js"

const router = express.Router()

router.get("/t", test)

export default router