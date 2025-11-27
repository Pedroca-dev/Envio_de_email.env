const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator');
const { validarContato } = require('../validators/contatoValidator');
const { enviarEmailContato } = require('../services/emailService');

// Rota inicial - redireciona para o formulário
router.get("/", function (req, res) {
    res.redirect("/contato");
});

// Rota para exibir o formulário de contato
router.get("/contato", function (req, res) {
    res.render("pages/formulario", {
        titulo: "Formulário de Contato",
        erros: [],
        dados: {}
    });
});

// Rota para processar o formulário de contato
router.post("/contato", validarContato, async function (req, res) {
    const erros = validationResult(req);
    
    if (!erros.isEmpty()) {
        return res.render("pages/formulario", {
            titulo: "Formulário de Contato",
            erros: erros.array(),
            dados: req.body
        });
    }

    // Enviar e-mail
    const resultado = await enviarEmailContato(req.body);

    if (resultado.sucesso) {
        res.render("pages/sucesso", {
            titulo: "Mensagem Enviada com Sucesso!",
            mensagem: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve."
        });
    } else {
        res.render("pages/formulario", {
            titulo: "Formulário de Contato",
            erros: [{ msg: "Erro ao enviar e-mail. Tente novamente mais tarde." }],
            dados: req.body
        });
    }
});

module.exports = router;