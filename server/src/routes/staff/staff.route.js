import express from 'express';
import staffController from '../../controllers/staff/staff.controller.js';
import { verifyToken } from '../../middlewares/auth/verifytoken.js';

const router = express.Router();

// Get all staff
router.get('/', staffController.getAllStaff);

// Get staff by ID
router.get('/:id', staffController.getStaffById);

// Get staff metrics and statistics
router.get('/metrics/summary', staffController.getStaffMetrics);

// Create new staff member
router.post('/', verifyToken, staffController.createStaff);

// Update staff member
router.put('/:id', verifyToken, staffController.updateStaff);

// Delete staff member
router.delete('/:id', verifyToken, staffController.deleteStaff);

// Get staff members by store
router.get('/by-store/:storeId', staffController.getStaffByStore);

export default router; 