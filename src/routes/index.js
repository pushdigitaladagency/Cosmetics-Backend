import express from 'express';
import healthRouter from './health.js';
import productRouter from './Product.mjs';
import categoryRouter from './Category.mjs';

const router = express.Router();

// Mount routes
router.use('/health', healthRouter);
router.use('/api', productRouter);
router.use('/api', categoryRouter);

export default router;

