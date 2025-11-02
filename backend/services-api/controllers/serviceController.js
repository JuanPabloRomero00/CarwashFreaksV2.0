const serviceService = require('../services/service.service');

// Consultar servicios (usuario)
exports.getServices = async (req, res, next) => {
  try {
    const services = await serviceService.getServices();
    res.json({ services });
  } catch (err) {
    next(err);
  }
};

// Crear servicio (admin)
exports.createService = async (req, res, next) => {
  try {
    const service = await serviceService.createService(req.user, req.body);
    res.status(201).json({ service });
  } catch (err) {
    next(err);
  }
};

// Editar servicio (admin)
exports.updateService = async (req, res, next) => {
  try {
    const service = await serviceService.updateService(req.user, req.params.id, req.body);
    res.json({ service });
  } catch (err) {
    next(err);
  }
};

// Eliminar servicio (admin)
exports.deleteService = async (req, res, next) => {
  try {
    await serviceService.deleteService(req.user, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};