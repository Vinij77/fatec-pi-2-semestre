import { useState } from "react";
import "./styles.scss";
import { api } from "../../shared/api";

export const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const login = (event) => {
    event.preventDefault();

    api.post("login", { email: Email, senha: Senha }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="background">
      <form onSubmit={login}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Senha</label>
        <input
          value={Senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};
