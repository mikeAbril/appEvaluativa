import express from "express";
import 'dotenv/config';
import { verificarMembresia } from "./cron/verificacionMembresia.js";
import { alertarVencimientos } from "./cron/alertarVencimientos.js";

import usuariosRoute from './routes/usuariosRoute.js';
import lecturasRoute from './routes/lecturasRoute.js';
import pagosRoute from './routes/pagosRoute.js';

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuariosRoute);
app.use('/api/lecturas', lecturasRoute);
app.use('/api/pagos', pagosRoute);


verificarMembresia();
alertarVencimientos();

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
);

 
