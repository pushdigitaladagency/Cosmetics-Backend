import express from 'express';
import healthRouter from './health.js';

const router = express.Router();

// Mount routes
router.use('/health', healthRouter);

export default router;
