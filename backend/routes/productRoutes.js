import express from "express";
import {
  gerProducts,
  gerProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(gerProducts);
router.route("/:id").get(gerProductById);

export default router;
