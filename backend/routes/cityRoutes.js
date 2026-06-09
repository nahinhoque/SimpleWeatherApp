import express from "express";
import getcities from "../controllers/cityController.js";

const router = express.Router();

router.get("/cities", getcities);
export default router;
