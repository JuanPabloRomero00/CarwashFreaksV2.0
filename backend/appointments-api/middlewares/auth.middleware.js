// Middlewares para roles y dueño en appointments-api

function authorizeAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: admin only' });
  }
  next();
}

function authorizeSelfOrAdmin(req, res, next) {
  if (!req.user) {
    return res.status(403).json({ error: 'Forbidden: not authenticated' });
  }
  if (req.user.role === 'admin') return next();
  // Para cancelar/ver turnos propios
  if (req.user.id === req.params.id || req.user.id === req.body.userId) return next();
  return res.status(403).json({ error: 'Forbidden: not allowed' });
}

module.exports = { authorizeAdmin, authorizeSelfOrAdmin };
