CREATE TABLE avaliacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_produtos INTEGER NOT NULL,
    id_clientes INTEGER NOT NULL,
    nota INTEGER NOT NULL,
    comentario TEXT NOT NULL,
    dt_avaliacao TEXT NOT NULL,
    FOREIGN KEY (id_produtos) REFERENCES produtos (id),
    FOREIGN KEY (id_clientes) REFERENCES clientes (id)
);