const { body } = require('express-validator');

const validarContato = [
  body('nome')
    .notEmpty().withMessage('Nome é obrigatório')
    .isLength({ min: 3 }).withMessage('Nome deve ter no mínimo 3 caracteres')
    .trim(),
  
  body('email')
    .notEmpty().withMessage('E-mail é obrigatório')
    .isEmail().withMessage('E-mail inválido')
    .normalizeEmail(),
  
  body('telefone')
    .notEmpty().withMessage('Telefone é obrigatório')
    .matches(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/).withMessage('Formato de telefone inválido. Use (XX) XXXXX-XXXX')
    .trim(),
  
  body('assunto')
    .notEmpty().withMessage('Assunto é obrigatório')
    .isLength({ min: 3 }).withMessage('Assunto deve ter no mínimo 3 caracteres')
    .trim(),
  
  body('mensagem')
    .notEmpty().withMessage('Mensagem é obrigatória')
    .isLength({ min: 10 }).withMessage('Mensagem deve ter no mínimo 10 caracteres')
    .trim()
];

module.exports = { validarContato };