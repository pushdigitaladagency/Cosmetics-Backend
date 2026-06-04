import express from 'express';
import healthRouter from './health.js';
import productRouter from './CosmeticsProducts.mjs';
import categoryRouter from './CosmeticsCategory.mjs';
import grainsProductRouter from './GrainsProducts.mjs';
import grainsCategoryRouter from './GrainsCategory.mjs';

const router = express.Router();

// Mount routes
router.use('/health', healthRouter);
router.use('/api', productRouter);
router.use('/api', categoryRouter);
router.use('/api', grainsProductRouter);
router.use('/api', grainsCategoryRouter);

export default router;

