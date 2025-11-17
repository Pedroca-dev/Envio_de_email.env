const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator');
const { validarContato } = require('../validators/contatoValidator');
const { enviarEmailContato } = require('../services/emailService');

router.get("/", function (req, res) {
    res.render("pages/index", {titulo:"Conceitos de Programação Back-End"})
});

router.get("/sobre-api", function (req, res) {
    res.render("pages/sobre-api", {titulo:"APIs - Application Programming Interface"})
});

router.get("/banco-de-dados", function (req, res) {
    res.render("pages/banco-de-dados", {titulo:"Banco de Dados"})
});

router.get("/autenticacao", function (req, res) {
    res.render("pages/autenticacao", {titulo:"Autenticação e Autorização"})
});

router.get("/servidor", function (req, res) {
    res.render("pages/servidor", {titulo:"Servidores e Frameworks"})
});

// Rota para exibir o formulário de contato
router.get("/contato", function (req, res) {
    res.render("pages/formulario", {
        titulo: "Contato",
        erros: [],
        dados: {}
    });
});

// Rota para processar o formulário de contato
router.post("/contato", validarContato, async function (req, res) {
    const erros = validationResult(req);
    
    if (!erros.isEmpty()) {
        return res.render("pages/formulario", {
            titulo: "Contato",
            erros: erros.array(),
            dados: req.body
        });
    }

    // Enviar e-mail
    const resultado = await enviarEmailContato(req.body);

    if (resultado.sucesso) {
        res.render("pages/sucesso", {
            titulo: "Mensagem Enviada",
            mensagem: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve."
        });
    } else {
        res.render("pages/formulario", {
            titulo: "Contato",
            erros: [{ msg: "Erro ao enviar e-mail. Tente novamente mais tarde." }],
            dados: req.body
        });
    }
});

module.exports = router;