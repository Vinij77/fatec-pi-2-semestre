CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    estoque INTEGER NOT NULL,
    descricao TEXT NOT NULL,
    dt_validade TEXT NOT NULL,
);