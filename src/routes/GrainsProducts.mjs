import express from 'express';
import {
  getGrainsProducts,
  getGrainsProduct,
  getGrainsProductsByCategory,
  getFeaturedGrainsProducts
} from '../controllers/grainsProductsController.mjs';

const router = express.Router();

// GET /api/grains/products/featured
router.get('/grains/products/featured', getFeaturedGrainsProducts);

// GET /api/grains/products
router.get('/grains/products', getGrainsProducts);

// GET /api/grains/products/:slug
router.get('/grains/products/:slug', getGrainsProduct);

// GET /api/grains/categories/:slug/products
router.get('/grains/categories/:slug/products', getGrainsProductsByCategory);

export default router;
