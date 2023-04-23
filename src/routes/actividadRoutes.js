const express = require('express');
const actividadController = require('../controllers/actividadController');

const router = express.Router();

router.get('/', actividadController.getActividades);
router.post('/', actividadController.createActividad);
router.get('/fecha', actividadController.obtenerActividadesPorFecha);



module.exports = router;
