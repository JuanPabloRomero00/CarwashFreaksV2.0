const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.getUserAppointments);
router.post('/', appointmentController.createAppointment);
router.delete('/:id', appointmentController.cancelAppointment);
router.get('/all', appointmentController.getAllAppointments);
router.put('/:id', appointmentController.updateAppointment);

module.exports = router;