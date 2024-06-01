CREATE TABLE produtos_categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_produtos INTEGER NOT NULL,
    id_categorias INTEGER NOT NULL,
    FOREIGN KEY (id_produtos) REFERENCES produtos (id),
    FOREIGN KEY (id_categorias) REFERENCES categorias (id)
);