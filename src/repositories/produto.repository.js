import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        valor TEXT NOT NULL,
        tipo TEXTNOT NULL
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
    })
}

export default {
    findAllProdutoRepository
}