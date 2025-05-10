const express = require('express');
const router = express.Router();
const {
  createConsultation,
  getAllConsultations,
  getConsultationById,
  updateConsultationStatus,
  assignConsultation,
  getUserConsultations
} = require('../controllers/consultation.controller');
const { auth, adminAuth } = require('../middleware/auth.middleware');

// Public routes
router.post('/', createConsultation);

// Protected routes
router.get('/my-consultations', auth, getUserConsultations);
router.get('/:id', auth, getConsultationById);

// Admin routes
router.get('/', adminAuth, getAllConsultations);
router.patch('/:id/status', adminAuth, updateConsultationStatus);
router.patch('/:id/assign', adminAuth, assignConsultation);

module.exports = router; 