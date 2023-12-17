import { Router } from "express";
import { methods as productsController } from "../controllers/products.controller";

const router = Router();

router.get("/api/Products", productsController.getProducts);
router.get("/api/Products/:ID_PRODUCT", productsController.getProduct);
router.put("/api/Products/:ID_PRODUCT", productsController.updateProduct);
router.delete("/api/Products/:ID_PRODUCT",productsController.deleteProduct);
router.post("/api/Products", productsController.addProduct);

export default router;