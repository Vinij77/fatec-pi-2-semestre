import { Input } from "../components/input";

export const ContatoPage = () => {
  return (
    <div
      style={{ height: "calc(100vh - 123px)" }}
      className="flex flex-col p-8 justify-center"
    >
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-[48px] font-semibold leading-[140%]">
            Como podemos ajudar?
          </h1>
          <p className="text-[#5c728e] max-w-[750px] mb-[47px]">
            Entre em contato conosco através do formulário ao lado em caso de
            alguma pergunta, crítica ou comentário.
          </p>
        </div>
        <div className="bg-white p-[30px] flex max-w-[650px] w-full items-stretch flex-col rounded-[10px] border border-[#e8e8e8] gap-5">
          <h2 className="text-[30px] font-semibold leading-[40px]">
            Entre em contato
          </h2>
          <p className="text-[#666] max-w-[348px] leading-[25px]">
            Envie-nos a sua mensagem através do formulário.
          </p>
          <div className="grid grid-cols-2 gap-x-[30px]">
            <Input Label="Nome" placeholder="Nome Sobrenome" />
            <Input Label="Email" placeholder="nome@mail.com" />
            <Input Label="Celular" placeholder="(19) 91234-5678" />
            <Input Label="Assunto" placeholder="Seu tópico" />
            <Input Label="Mensagem" placeholder="Comentários..." />
          </div>
          <button
            style={{ transition: "color .3s, background-color .5s" }}
            className="rounded bg-[#dd3842] py-[15px] px-[34px] font-semibold leading-[20px] text-white w-fit"
            onClick={() => {
              alert("Em breve!");
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
