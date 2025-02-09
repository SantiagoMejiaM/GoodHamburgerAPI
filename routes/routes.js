import express from "express";
import {
  getAllSandwiches,
  getAllOrders,
  getAllExtras,
  deleteOrder,
  updateOrder,
  createOrder
} from "../controller/orderController.js";
import validateOrder from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/order", validateOrder, createOrder);
router.get("/order", getAllOrders);
router.get("/sandwiches", getAllSandwiches);
router.get("/extras", getAllExtras);
router.put("/order/:id", validateOrder, updateOrder);
router.delete("/order/:id", deleteOrder);

export default router;