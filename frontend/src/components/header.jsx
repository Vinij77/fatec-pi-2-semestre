import { NavLink } from "react-router-dom";
import UserSvg from "../assets/user.svg";
import CarrinhoSvg from "../assets/carrinho.svg";
import { useState } from "react";

export const HeaderComponent = () => {
  const [CarrinhoQuantidade, setCarrinhoQuantidade] = useState(0);
  const [CarrinhoTotal, setCarrinhoTotal] = useState(0);

  return (
    <div className="w-full max-w-full grid h-[123px] items-center justify-between border-b border-[#b4becb] px-8 grid-cols-[300px,1fr,150px,150px] justify-items-center bg-white">
      <NavLink to="/" className="flex items-center">
        <img
          alt="Logo da empresa"
          src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
          className="w-12 h-12 m-0 mx-4 object-contain"
        />
        <p>Suplementos</p>
      </NavLink>
      <div className="flex items-center justify-center gap-4">
        <NavLink
          to="/"
          className="text-[16px] font-[500] leading-[26px] transition-colors hover:text-[#dd3842] active:text-[#dd3842]"
        >
          Home
        </NavLink>
        <NavLink
          to="/contato"
          className="text-[16px] font-[500] leading-[26px] transition-colors hover:text-[#dd3842] active:text-[#dd3842]"
        >
          Contato
        </NavLink>
      </div>
      <NavLink to="/login" className="flex gap-[12px] items-center">
        <img src={UserSvg} className="w-6 h-6 object-cover" />
        <div className="flex flex-col">
          <p className="font-semibold text-[12px] leading-[15px] text-[#8f9eb2]">
            Login
          </p>
          <p className="text-[#0c2d57] text-[16px] leading-[26px]">Conta</p>
        </div>
      </NavLink>
      <div className="gap-5 cursor-pointer flex items-center">
        <div className="relative w-fit">
          <img src={CarrinhoSvg} />
          <span className="absolute bg-[#e87a80] text-white justify-center items-center w-5 h-5 text-[12px] leading-[17px] flex top-[-4px] bottom-auto left-auto right-[-11px] rounded-[9px]">
            {CarrinhoQuantidade > 9 ? "9+" : CarrinhoQuantidade}
          </span>
        </div>
        <div>
          <p className="font-semibold text-[12px] leading-[15px] text-[#8f9eb2]">
            Carrinho
          </p>
          <p className="text-[#0c2d57] text-[16px] font-bold">
            R$ {CarrinhoTotal?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
