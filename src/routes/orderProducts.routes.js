import { Router } from "express";
import { methods as orderProductController } from "../controllers/orderProducts.controller";

const router = Router();

router.get("/api/orderProducts", orderProductController.getOrderProducts);
router.get("/api/orderProducts/:ID_ORDER/:ORDER_PRODUCT", orderProductController.getOrderProduct);
router.get("/api/orderProducts/:ID_ORDER", orderProductController.getOrderProducts_);
router.post("/api/orderProducts", orderProductController.addOrderProducts_);
router.put("/api/orderProducts", orderProductController.updateOrderProducts);
router.delete("/api/orderProducts/:ID_ORDER", orderProductController.deleteOrderProducts);
router.delete("/api/orderProducts/:ID_ORDER/:ID_PRODUCT", orderProductController.deleteOrderProduct_);


export default router;