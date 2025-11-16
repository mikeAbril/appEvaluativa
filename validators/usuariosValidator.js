import {body} from 'express-validator';
import {validarDatos} from './validateResults.js' ;

export const validarCreacionUsuario = [
    body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({min:3}).withMessage('El nombre debe tener al menos 3 caracteres: por ejemplo Ana'),

    body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido'),


    body('fecha_nacimiento')
    .notEmpty().withMessage('La fecha de nacimiento es obligatoria')
    .isDate().withMessage('le fecha debe contener año, mes, día'),

    validarDatos
];



export const validarActualizacionUsuario = [
    body('nombre')
        .optional()
        .isLength({min:3}).withMessage('El nombre debe tener al menos 3 caracteres: por ejemplo Ana'),
    

    body('email')
    .optional()
    .isEmail().withMessage('Debe ser un email válido'),

    body('fecha_nacimiento')
    .optional()
    .isDate().withMessage('le fecha debe contener año, mes, día'),

    validarDatos

]