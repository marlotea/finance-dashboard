import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/products", async(req, res) => {
    try {
        const kpis = await Product.find();
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({ message: error.message });
        }
    }
);

export default router;