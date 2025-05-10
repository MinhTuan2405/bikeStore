import express from 'express';
import showroomController from '../../controllers/showroom/showroom.controller.js';
import { verifyToken } from '../../middlewares/auth/auth.middleware.js';

const router = express.Router();

// Get all showrooms
router.get('/', showroomController.getAllShowrooms);

// Get showroom by ID
router.get('/:id', showroomController.getShowroomById);

// Get showroom metrics and statistics
router.get('/metrics/summary', showroomController.getShowroomMetrics);

// Create new showroom
router.post('/', verifyToken, showroomController.createShowroom);

// Update showroom
router.put('/:id', verifyToken, showroomController.updateShowroom);

// Delete showroom
router.delete('/:id', verifyToken, showroomController.deleteShowroom);

// Get products in a showroom
router.get('/:id/products', showroomController.getShowroomProducts);

export default router; 