import { Router } from "express";
import { methods as orderProductController } from "../controllers/orderProducts.controller";

const router = Router();

router.get("/api/orderProducts", orderProductController.getOrderProducts);
router.get("/api/orderProducts/:ID_ORDER/:ORDER_PRODUCT", orderProductController.getOrderProduct);
router.get("/api/orderProducts/:ID_ORDER", orderProductController.getOrderProducts_);
router.post("/api/orderProducts", orderProductController.addOrderProducts_);
// router.post("/api/orderProducts", orderProductController.addOrderProduct);
router.delete("/api/orderProducts/:ID_ORDER", orderProductController.deleteOrderProducts);


export default router;