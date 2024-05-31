import { useState } from "react";
import { api } from "../shared/api";
import { Input } from "../components/input.jsx";
import { NavLink } from "react-router-dom";

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
    <div className="items-center flex flex-col h-full justify-center min-h-screen min-w-full w-full bg-[#0c2d57b3]">
      <form
        onSubmit={login}
        className="pt-[33px] px-[65px] pb-[60px] bg-white flex flex-col justify-center rounded-[10px] w-[500px] relative"
      >
        <NavLink
          to="/"
          className="absolute top-[15px] right-[20px] text-[#8f9eb2]"
        >
          Voltar para a Home
        </NavLink>
        <h2 className="text-[#0c2d57] text-[30px] font-semibold leading-[140%] mb-[20px]">
          Log in
        </h2>
        <Input
          Label={"Email"}
          value={Email}
          placeholder={"Digite seu email"}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          Label={"Senha"}
          value={Senha}
          placeholder={"*********"}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button
          style={{ transition: "color .3s, background-color .5s" }}
          className="rounded bg-[#dd3842] mt-[14px] py-[16px] px-[34px] font-semibold leading-[22px] text-white"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
