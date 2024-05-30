import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <div className="w-full max-w-full grid h-20 items-center font-bold justify-between border-b-2 border-[#e5e8ed] px-8 grid-cols-[200px,1fr,200px] justify-items-center">
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
          className="px-4 py-2 rounded-[5px] hover:bg-blue-200 active:bg-blue-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/contato"
          className="px-4 py-2 rounded-[5px] hover:bg-blue-200 active:bg-blue-200"
        >
          Contato
        </NavLink>
      </div>
      <NavLink
        to="/login"
        className="bg-[#3c6fdd] text-[#f6f9fd] px-4 py-2 rounded-[5px]"
      >
        Login
      </NavLink>
    </div>
  );
};
