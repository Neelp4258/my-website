const express = require('express');
const router = express.Router();
const { 
  createJob, 
  getAllJobs, 
  getJobById, 
  updateJob, 
  deleteJob, 
  applyForJob 
} = require('../controllers/job.controller');
const { auth, adminAuth } = require('../middleware/auth.middleware');

// Public routes
router.get('/', getAllJobs);
router.get('/:id', getJobById);

// Protected routes
router.post('/apply/:id', auth, applyForJob);

// Admin routes
router.post('/', adminAuth, createJob);
router.patch('/:id', adminAuth, updateJob);
router.delete('/:id', adminAuth, deleteJob);

module.exports = router; 