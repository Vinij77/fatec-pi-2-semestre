CREATE TABLE fornecedores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    cep TEXT NOT NULL,
    complemento TEXT,
    telefone TEXT NOT NULL,
    status TEXT NOT NULL,
    id_cidades INTEGER NOT NULL,
    FOREIGN KEY (id_cidades) REFERENCES cidades (id)
);