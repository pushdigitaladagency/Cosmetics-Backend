import express from 'express';
import {
  getCategories,
  getCategory
} from '../controllers/categoryController.mjs';

const router = express.Router();

// GET /api/categories          → all categories
router.get('/categories', getCategories);


// GET /api/categories/:catcode → single category
router.get('/categories/:catcode', getCategory);

export default router;
