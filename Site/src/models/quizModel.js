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

function buscarResultado(fkUsuario) {
    var instrucaoSql = ` 
    SELECT c.nome, rc.pontuacao 
    FROM resultadoCompetencia rc 
    JOIN quiz q 
        ON rc.fkQuiz = q.idQuiz 
    JOIN competencia c 
        ON rc.fkCompetencia = c.idCompetencia 
    WHERE q.fkUsuario = ${fkUsuario} ORDER BY c.idCompetencia;`;

    return database.executar(instrucaoSql);
}

    module.exports = {
        criarQuiz,
        salvarResultado,
        buscarResultado
    };