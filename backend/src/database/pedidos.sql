CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_clientes INTEGER NOT NULL,
    status TEXT NOT NULL,
    endereco TEXT NOT NULL,
    dt_pedido TEXT NOT NULL,
    total REAL NOT NULL,
    FOREIGN KEY (id_clientes) REFERENCES clientes (id)
);