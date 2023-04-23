const Actividad = require('../models/actividadModel');

exports.obtenerActividadesPorFecha = async (req, res, next) => {
  try {
    const fecha = new Date(req.params.fecha);
    const actividad = await Actividad.findOne({ fecha });
    res.json({
      fecha: actividad.fecha,
      actividades: actividad.actividades
    });
  } catch (error) {
    next(error);
  }
};


