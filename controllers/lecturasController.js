import {
    crearLecturaPrincipal,
    crearLecturaDiaria,
    obtenerLecturaPorId,
    ObtenerLecturasUsuario
} from '../models/lecturasModel.js';
import { GoogleGenAI } from "@google/genai";

const IA = new GoogleGenAI({
  apiKey: "AIzaSyAYxosLe9ts62wxwRESgaSxrLcL8CuOs78"
});

async function LecturaGeneradaIA() {
  const prompt = `
    Genera una lectura numerológica completa y profunda basada en la fecha de nacimiento 1990-04-22.
    Incluye personalidad, propósito de vida y energía espiritual del usuario.
    Estilo místico e inspirador.
  `;

  const response = await IA.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log(response.text());
}

function reducirNumero(num){
  if (num === 11 || num=== 22) return num;

  let numero = num.toString().split('').map(n => parseInt(n))
  let suma = numero.reduce((a,b)=>a + b);
  // console.log(suma);
  
  return suma
}

export async function calcularCaminoVida(fecha_nacimiento){
const fecha = new Date(fecha_nacimiento);

const year = fecha.getFullYear();
const mount = fecha.getMonth()+1;
const day = fecha.getDate();

const año = reducirNumero(year);
const mes = reducirNumero(mount);
const dia = reducirNumero(day);

const total = año + mes + dia

const caminoVida = reducirNumero(total);
console.log(caminoVida);

 
return caminoVida


}


export async function postLecturaPrincipal(req, res) {
  try {
    const {usuario_id} = req.params;
    const lecturaPrincipal = await crearLecturaPrincipal(usuario_id);
    
    if (!lecturaPrincipal.usuario_id) return res.status(404).json({error: 'Usuario no encontrado, verifica si existe'});

  const camino = calcularCaminoVida(lecturaPrincipal.usuario.fecha_nacimiento);
      
  const prompt = `
  Actúa como un experto profesional en numerología pitagórica.
Recibirás un número ya calculado desde mi backend, correspondiente al Camino de Vida de una persona.
Tu tarea es generar una Lectura Principal completa, profunda, coherente y personalizada según el número recibido.
La lectura debe incluir:
Significado general del número en numerología pitagórica.
Rasgos principales de personalidad asociados al número.
Potencial espiritual o interno.
Fortalezas principales.
Retos, sombras o aprendizajes del número.
Consejos prácticos aplicables a la vida diaria.
No hables de la fórmula ni del cálculo ni mucho menos que eres IA, solo interpreta el número que te envío.

Cuando yo te envíe:
Número: ${camino}
Debes responder únicamente con la lectura completa para ese número.
  `

  const lecturaGenerada = LecturaGeneradaIA(prompt);
  res.json({
    nombre: `${lecturaPrincipal.usuario}`,
    LecturaPrincipal: lecturaGenerada
  })

  } catch (error) {
    res.status(500).json({ error: 'Error al generar Lectura' });
  }
}

export async function postLectura(req, res) {
  
}

export async function getLecturas(req, res) {
    
}

export async function getLectura(req, res) {
    
}