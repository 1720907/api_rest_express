import express from "express";
import morgan from "morgan";
// Routes
import orderRoutes from "./routes/order.routes"
import productRoutes from "./routes/product.routes"
import orderProductsRoutes from "./routes/orderProducts.routes"

const cors = require('cors');

const app=express();

//Settings
app.set("port", 4500);

// Middelwares fuciones intermedias entre peticion y respuesta
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use(orderRoutes);
app.use(productRoutes);
app.use(orderProductsRoutes);

export default app;
