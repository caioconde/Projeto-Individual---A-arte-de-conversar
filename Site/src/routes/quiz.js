let express = require("express");
let router = express.Router();

let quizController = require("../controllers/quizController");

router.post("/salvarResultado", function (req, res) {
    quizController.salvarResultado(req, res);
});

module.exports = router;