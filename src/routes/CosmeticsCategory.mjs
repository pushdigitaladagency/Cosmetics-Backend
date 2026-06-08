import express from 'express';
import {
  getCategories,
  getCategory
} from '../controllers/cosmeticsCategoryController.mjs';

const router = express.Router();

// GET /api/categories          → all categories
router.get('/categories', getCategories);


// GET /api/categories/:slug → single category by slug
router.get('/categories/:slug', getCategory);

export default router;
