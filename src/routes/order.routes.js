import { Router } from "express";
import { methods as orderController } from "../controllers/orders.controller";

const router = Router();

router.get("/api/Orders", orderController.getOrders);
router.get("/api/Orders/:ID_ORDER", orderController.getOrder);
router.post("/api/Orders", orderController.addOrder);
router.put("/api/Orders", orderController.updateOrder);
router.delete("/api/Orders/:ID_ORDER", orderController.deleteOrder);

export default router;