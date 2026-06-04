import express from 'express';
import {
  getGrainsCategories,
  getGrainsCategory
} from '../controllers/grainsCategoryController.mjs';

const router = express.Router();

// GET /api/grains/categories
router.get('/grains/categories', getGrainsCategories);

// GET /api/grains/categories/:slug
router.get('/grains/categories/:slug', getGrainsCategory);

export default router;
