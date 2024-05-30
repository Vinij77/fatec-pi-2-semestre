import { useState } from "react";
import { api } from "../shared/api";
import { Input } from "../components/input.jsx";

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
    <div className="items-center flex flex-col h-full justify-center min-h-screen min-w-full w-full">
      <form
        onSubmit={login}
        className="items-center bg-[#3c6fdd] rounded-[5px] flex flex-col gap-4 py-4 px-8"
      >
        <h1>Login</h1>
        <Input
          Label={"Email"}
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          Label={"Senha"}
          value={Senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};
