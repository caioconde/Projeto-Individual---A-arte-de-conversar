-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE arteConversar;
USE arteConversar;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(150),
senha VARCHAR (250)
);

CREATE TABLE competencia (
idCompetencia INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
dataQuiz DATETIME DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
FOREIGN KEY (fkUsuario)REFERENCES usuario(idUsuario)
);

CREATE TABLE resultadoCompetencia (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
pontuacao INT,
fkQuiz INT,
fkCompetencia INT,
FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
FOREIGN KEY (fkCompetencia) REFERENCES competencia(idCompetencia)
);

INSERT INTO competencia(nome) VALUES
('Comunicação'),
('Liderança'),
('Empatia'),
('Relacionamento'),
('Inteligência Emocional');

