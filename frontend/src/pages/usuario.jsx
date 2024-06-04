import { useEffect, useRef, useState } from "react";
import { Input } from "../components/input";

export const UsuarioPage = () => {
  const DialogRef = useRef();
  const [ShowModal, setShowModal] = useState(false);

  const salvar = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  useEffect(() => {
    if (ShowModal && !DialogRef?.current?.hasAttribute("open"))
      DialogRef?.current?.showModal();
    else DialogRef?.current?.close();
  }, [ShowModal]);

  return (
    <div className="w-full">
      <div className="mb-[33px] w-full border-b border-[#d9d9d9] pb-[12px] flex justify-between p-8">
        <h1 className="text-[38px] leading-[140%] font-semibold">Usuários</h1>
        <button
          className="rounded bg-[#dd3842] py-[15px] px-[34px] font-semibold leading-[20px] text-white w-fit"
          onClick={() => setShowModal(true)}
        >
          Cadastrar
        </button>
      </div>
      <dialog
        ref={DialogRef}
        onCancel={() => setShowModal(false)}
        className={`backdrop:bg-black/50 bg-transparent flex-col p-4 fixed left-0 top-0 h-screen w-screen border-none items-center z-[13] overflow-y-auto ${
          ShowModal ? "flex" : ""
        }`}
      >
        <form
          onSubmit={salvar}
          className="bg-[#f8f9ff] flex flex-col gap-4 rounded-lg items-center h-fit my-auto mx-0 p-12 w-fir z-[15]"
        >
          <h1 className="text-[38px] leading-[140%] font-semibold">
            Cadastrar Usuário
          </h1>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirmação de Senha" />
          <div className="flex gap-4">
            <button className="rounded bg-[#dd3842] hover:bg-white hover:text-[#0c2d57] hover:border-[#0c2d57] border py-[15px] px-[34px] font-semibold leading-[20px] text-white w-fit">
              Cadastrar
            </button>
            <button
              className="rounded border-[#0c2d57] border bg-white hover:bg-[#dd3842] hover:text-white hover:border-white py-[15px] px-[34px] font-semibold leading-[20px] text-[#0c2d57] w-fit"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
