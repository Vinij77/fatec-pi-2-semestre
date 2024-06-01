CREATE TABLE fornecedores_produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_fornecedores INTEGER NOT NULL,
    id_produtos INTEGER NOT NULL,
    preco REAL NOT NULL,
    quantidade INTEGER NOT NULL,
    FOREIGN KEY (id_fornecedores) REFERENCES fornecedores (id),
    FOREIGN KEY (id_produtos) REFERENCES produtos (id)
);