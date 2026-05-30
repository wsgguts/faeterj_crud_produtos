//04 - produto.repository.js — o acesso ao banco
//Só ele faz queries SQL. O resto do projeto não precisa saber como o banco funciona.

import db from "../05_config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        valor TEXT NOT NULL,
        tipo TEXT NOT NULL
    )    
`);

function findAllProdutoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM produto`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

export default {
    findAllProdutoRepository
}