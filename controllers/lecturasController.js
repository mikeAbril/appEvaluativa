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

await LecturaGeneradaIA();


 

export async function postLecturaPrincipal(req, res) {
    
}

export async function postLectura(req, res) {
    
}

export async function getLecturas(req, res) {
    
}

export async function getLectura(req, res) {
    
}