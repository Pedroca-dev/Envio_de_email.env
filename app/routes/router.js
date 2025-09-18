var express = require("express");
var router = express.Router();


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




module.exports = router;