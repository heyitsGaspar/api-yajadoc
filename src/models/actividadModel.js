const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
  id: {type:String,required: true},
  fecha: { type: Date, required: true },
  actividades: [{
    nombre: { type: String, required: true },
    hora_inicio: { type: String, required: true },
    hora_fin: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Actividad', fechaSchema);
