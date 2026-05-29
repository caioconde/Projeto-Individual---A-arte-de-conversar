var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarResultado", function (req, res) {
    quizController.salvarResultado(req, res);
});

router.get("/buscarResultado/:fkUsuario", function (req, res) {
     quizController.buscarResultado(req, res); 
    });
module.exports = router;