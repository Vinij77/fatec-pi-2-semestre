CREATE TABLE produtos_pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pedidos INTEGER NOT NULL,
    id_produtos INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco REAL NOT NULL,
    FOREIGN KEY (id_produtos) REFERENCES produtos (id),
    FOREIGN KEY (id_pedidos) REFERENCES pedidos (id)
);