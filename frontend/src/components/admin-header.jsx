import { NavLink, useNavigate, Outlet } from "react-router-dom";

export const AdminHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="grid grid-cols-[200px,1fr]">
      <div className="w-[200px] h-screen bg-[#2b38d1] px-4 py-8 text-white flex flex-col gap-8">
        <NavLink to="/admin" className="flex items-center flex-col">
          <img
            alt="Logo da empresa"
            src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
            className="w-12 h-12 m-0 mx-4 object-contain"
          />
          <p>Suplementos</p>
        </NavLink>
        <div className="flex flex-col gap-8 text-white">
          <NavLink to="/admin">Home</NavLink>
          <NavLink to="/admin/avaliacoes">Avaliações</NavLink>
          <NavLink to="/admin/categorias">Categorias</NavLink>
          <NavLink to="/admin/clientes">Clientes</NavLink>
          <NavLink to="/admin/cupons">Cupons</NavLink>
          <NavLink to="/admin/pedidos">Pedidos</NavLink>
          <NavLink to="/admin/fornecedores">Fornecedores</NavLink>
          <NavLink to="/admin/produtos">Produtos</NavLink>
          <NavLink to="/admin/usuarios">Usuários</NavLink>
        </div>
        <button
          onClick={logout}
          className="rounded bg-[#dd3842] py-[15px] px-[34px] font-semibold leading-[20px] text-white w-fit mx-auto mt-auto"
        >
          Sair
        </button>
      </div>
      <Outlet />
    </div>
  );
};
