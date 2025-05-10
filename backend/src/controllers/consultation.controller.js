const Consultation = require('../models/consultation.model');

// Create new consultation request
const createConsultation = async (req, res) => {
  try {
    const consultation = new Consultation(req.body);
    await consultation.save();
    res.status(201).json({
      message: 'Consultation request submitted successfully',
      consultation
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting consultation request', error: error.message });
  }
};

// Get all consultations (admin only)
const getAllConsultations = async (req, res) => {
  try {
    const { status, assignedTo } = req.query;
    const query = {};

    if (status) query.status = status;
    if (assignedTo) query.assignedTo = assignedTo;

    const consultations = await Consultation.find(query)
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });

    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultations', error: error.message });
  }
};

// Get consultation by ID
const getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id)
      .populate('assignedTo', 'name email');

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    res.json(consultation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultation', error: error.message });
  }
};

// Update consultation status
const updateConsultationStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    if (status) consultation.status = status;
    if (notes) consultation.notes = notes;

    await consultation.save();
    res.json({
      message: 'Consultation updated successfully',
      consultation
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating consultation', error: error.message });
  }
};

// Assign consultation to admin
const assignConsultation = async (req, res) => {
  try {
    const { assignedTo } = req.body;
    const consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    consultation.assignedTo = assignedTo;
    consultation.status = 'assigned';
    await consultation.save();

    res.json({
      message: 'Consultation assigned successfully',
      consultation
    });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning consultation', error: error.message });
  }
};

// Get user's consultations
const getUserConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find({ email: req.user.email })
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });

    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultations', error: error.message });
  }
};

module.exports = {
  createConsultation,
  getAllConsultations,
  getConsultationById,
  updateConsultationStatus,
  assignConsultation,
  getUserConsultations
}; 