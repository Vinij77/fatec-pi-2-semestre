CREATE TABLE cidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    id_estados INTEGER NOT NULL,
    FOREIGN KEY (id_estados) REFERENCES estados (id)
);