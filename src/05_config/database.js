//05 - database.js — a conexão
//Abre a conexão com o SQLite e exporta o objeto db para o repository usar.


import sqlite3 from "sqlite3";

const db = new sqlite3.Database('database.sqlite',
    (error) => {
        if (error) {
           console.log("Erro ao conectar ao banco ao banco de dados: ", error.message);
        } else {
            console.log("Conectado ao banco de dados com sucesso.")
        }
    }
);

export default db;