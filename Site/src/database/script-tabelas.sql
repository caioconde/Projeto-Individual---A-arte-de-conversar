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

select * from usuario;	

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
tempo DATETIME
);

CREATE TABLE pergunta(
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
resposta
);
