var database = require("../database/config");

function criarQuiz(fkUsuario) {

    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario)
        VALUES (${fkUsuario});
    `;

    return database.executar(instrucaoSql);
}

function salvarResultado(pontuacao, fkQuiz, fkCompetencia) {

    var instrucaoSql = `
        INSERT INTO resultadoCompetencia
        (pontuacao, fkQuiz, fkCompetencia)
        VALUES
        (${pontuacao}, ${fkQuiz}, ${fkCompetencia});
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    criarQuiz,
    salvarResultado
};