let quizModel = require("../models/quizModel");

function salvarResultado(req, res) {

    let fkUsuario = req.body.fkUsuario;

    let comunicacao = req.body.comunicacao;
    let lideranca = req.body.lideranca;
    let empatia = req.body.empatia;
    let relacionamento = req.body.relacionamento;
    let inteligenciaEmocional = req.body.inteligenciaEmocional;

    if (fkUsuario == undefined) {
        res.status(400).json({
            mensagem: "fkUsuario está undefined"
        });
    } else {

        quizModel.criarQuiz(fkUsuario)
            .then(function (resultadoQuiz) {
                let idQuiz = resultadoQuiz.insertId;

                quizModel.salvarResultado(comunicacao, idQuiz, 1);
                quizModel.salvarResultado(lideranca, idQuiz, 2);
                quizModel.salvarResultado(empatia, idQuiz, 3);
                quizModel.salvarResultado(relacionamento, idQuiz, 4);
                quizModel.salvarResultado(inteligenciaEmocional, idQuiz, 5);

                res.status(200).json({
                    mensagem: "Resultado salvo com sucesso"
                });

            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro);

            });
    }
}

function buscarResultado(req, res) {
    let fkUsuario = req.params.fkUsuario;

    quizModel.buscarResultado(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);

        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);

        });
}
module.exports = {
    salvarResultado,
    buscarResultado
};