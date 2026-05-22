let quizModel = require("../models/quizModel");

async function salvarResultado(req, res) {

    let fkUsuario = req.body.fkUsuario;

    let comunicacao = req.body.comunicacao;
    let lideranca = req.body.lideranca;
    let empatia = req.body.empatia;
    let relacionamento = req.body.relacionamento;
    let inteligenciaEmocional = req.body.inteligenciaEmocional;

    try {

        let resultadoQuiz = await quizModel.criarQuiz(fkUsuario);

        let idQuiz = resultadoQuiz.insertId;

        await quizModel.salvarResultado(comunicacao, idQuiz, 1);

        await quizModel.salvarResultado(lideranca, idQuiz, 2);

        await quizModel.salvarResultado(empatia, idQuiz, 3);

        await quizModel.salvarResultado(relacionamento, idQuiz, 4);

        await quizModel.salvarResultado(inteligenciaEmocional, idQuiz, 5);

        res.status(200).json({
            mensagem: "Resultado salvo com sucesso"
        });

    } catch (erro) {

        console.log(erro);

        res.status(500).json(erro);
    }
}

module.exports = {
    salvarResultado
};