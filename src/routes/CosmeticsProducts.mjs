import express from 'express';
import {
  getProducts,
  getProduct,
  getProductsByCategory
} from '../controllers/cosmeticsProductsController.mjs';

const router = express.Router();

// GET /api/products              → all products
router.get('/products', getProducts);

// GET /api/products/:slug        → single product by slug
router.get('/products/:slug', getProduct);

// GET /api/categories/:slug/products → products by category slug
router.get('/categories/:slug/products', getProductsByCategory);

export default router;