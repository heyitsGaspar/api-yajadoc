const express = require('express');
const bodyParser = require('body-parser');
const actividadRoutes = require('./routes/actividadRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Yajadoc', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', console.error.bind(console, 'Error de conexión:'));
mongoose.connection.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/actividades', actividadRoutes);

// Ruta para obtener todas las actividades
app.get('/actividades', async (req, res) => {
  try {
    const actividades = await Actividad.find();
    res.json(actividades);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});



// Inicio del servidor en el puerto 3000
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));

