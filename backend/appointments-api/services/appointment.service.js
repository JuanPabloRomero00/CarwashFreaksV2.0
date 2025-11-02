const Appointment = require('../models/Appointment');

exports.createAppointment = async (requestingUser, data) => {
  const { serviceId, date, time } = data;
  const userId = requestingUser.id;
  const appointment = new Appointment({ userId, serviceId, date, time });
  return await appointment.save();
};

exports.getAppointmentsByUser = async (requestingUser) => {
  return await Appointment.find({ userId: requestingUser.id });
};

exports.cancelAppointment = async (requestingUser, appointmentId) => {
  const appointment = await Appointment.findOne({ _id: appointmentId, userId: requestingUser.id });
  if (!appointment) throw { status: 404, message: 'Appointment not found or not allowed' };
  await appointment.deleteOne();
};

exports.getAllAppointments = async (requestingUser) => {
  if (requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  return await Appointment.find();
};

exports.updateAppointment = async (requestingUser, appointmentId, updateData) => {
  if (requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  const appointment = await Appointment.findByIdAndUpdate(appointmentId, updateData, { new: true });
  if (!appointment) throw { status: 404, message: 'Appointment not found' };
  return appointment;
};

exports.deleteAppointment = async (requestingUser, appointmentId) => {
  if (requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  const appointment = await Appointment.findByIdAndDelete(appointmentId);
  if (!appointment) throw { status: 404, message: 'Appointment not found' };
};
