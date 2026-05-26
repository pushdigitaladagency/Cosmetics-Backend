import express from 'express';
import {
  getProducts,
  getProduct,
  getProductsByCategory
} from '../controllers/productController.mjs';

const router = express.Router();

// GET /api/products         → all products
router.get('/products', getProducts);

// GET /api/products/:id     → single product by product_id
router.get('/products/:product_id', getProduct);

// GET /api/categories/:catcode/products → products by category
router.get('/categories/:catcode/products', getProductsByCategory);

export default router;