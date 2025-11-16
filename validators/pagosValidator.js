import { body,param } from 'express-validator';
import { validarDatos } from './validateResults.js';

export const validarCreacionPago = [
  body('usuario_id')
    .notEmpty().withMessage('El id del usuario es obligatorio')
    .isInt().withMessage('El id del usuario debe ser un número entero'),

  body('monto')
    .notEmpty().withMessage('El monto es obligatorio')
    .isFloat({ gt: 0 }).withMessage('El monto debe ser un número mayor que 0'),

  body('fecha_pago')
    .notEmpty().withMessage('La fecha de pago es obligatoria')
    .isDate().withMessage('Debe ser una fecha válida'),

  body('fecha_vencimiento')
    .notEmpty().withMessage('La fecha de vencimiento es obligatoria')
    .isDate().withMessage('Debe ser una fecha válida'),

  body('metodo')
    .notEmpty().withMessage('El método de pago es obligatorio')
    .isIn(['tarjeta', 'efectivo', 'transferencia'])
    .withMessage('El método debe ser: tarjeta, efectivo o transferencia'),

  validarDatos
];





export const validarActualizarPago = [
  param('id')
    .notEmpty().withMessage('El id del pago es obligatorio')
    .isInt().withMessage('El id del pago debe ser un número entero'),

  body('usuario_id')
    .optional()
    .isInt().withMessage('El id del usuario debe ser un número entero'),

  body('monto')
    .optional()
    .isFloat({ gt: 0 }).withMessage('El monto debe ser un número mayor que 0'),

  body('fecha_pago')
    .optional()
    .isDate().withMessage('Debe ser una fecha válida'),

  body('fecha_vencimiento')
    .optional()
    .isDate().withMessage('Debe ser una fecha válida'),

  body('metodo')
    .optional()
    .isIn(['tarjeta', 'efectivo', 'transferencia'])
    .withMessage('El método debe ser: tarjeta, efectivo o transferencia'),

  validarDatos
];
