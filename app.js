import express from "express"
import 'dotenv/config'

import usuariosRoute from './routes/usuariosRoute.js';
import lecturasRoute from './routes/lecturasRoute.js';
import pagosRoute from './routes/pagosRoute.js';

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuariosRoute);
app.use('/api/lecturas', lecturasRoute);
app.use('/api/pagos', pagosRoute);

app.listen(process.env.PORT, ()=> console.log(`servidor corriendo en http://localhost:${process.env.PORT}`));
 
 
