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
    .isDate().withMessage('Debe ser una fecha válida')
    .custom((value,{req}) => {
      const fechaPago = new Date(req.body.fecha_pago);
      const fechaVencimiento = new Date(value);

      const fechaMinima = new Date(fechaPago);
      fechaMinima.setMonth(fechaMinima.getMonth()+1);

      if(fechaVencimiento < fechaMinima){
        throw new Error('La fecha de vencimiento debe ser al menos un mes después de la fecha de pago')
      }
      return true;

    }),

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
    .isFloat({ gt: 0 }).withMessage('El monto debe ser mayor que 0'),

  body('fecha_pago')
    .optional()
    .isDate().withMessage('Debe ser una fecha válida'),

  body('fecha_vencimiento')
    .optional()
    .isDate().withMessage('Debe ser una fecha válida')
    .custom((value, { req }) => {
      if (!req.body.fecha_pago) return true; 

      const fechaPago = new Date(req.body.fecha_pago);
      const fechaVenc = new Date(value);

      const fechaMinima = new Date(fechaPago);
      fechaMinima.setMonth(fechaMinima.getMonth() + 1);

      if (fechaVenc < fechaMinima) {
        throw new Error('La fecha de vencimiento debe ser al menos un mes después de la fecha de pago');
      }

      return true;
    }),

  body('metodo')
    .optional()
    .isIn(['tarjeta', 'efectivo', 'transferencia'])
    .withMessage('El método debe ser: tarjeta, efectivo o transferencia'),

  validarDatos
];
