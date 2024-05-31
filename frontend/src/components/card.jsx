import Star from "../assets/star.png";

export const Card = ({ Text, Price, Image, Nota }) => {
  return (
    <div
      style={{ transition: "box-shadow .5s" }}
      className="w-[315px] h-[440px] bg-white flex flex-col items-center border justify-between border-[#e7eaee] rounded pt-[25px] pb-[28px] px-[30px] hover:shadow-custom cursor-pointer"
    >
      <img
        src={Image}
        alt="Imagem do produto"
        className="object-contain w-full h-full max-h-[220px]"
      />
      <div className="flex items-center flex-col w-full text-center gap-[10px]">
        <p className="text-[18px] leading-[160%] text-[#5c728e] font-[500]">
          {Text}
        </p>
        <div className="flex items-center mb-1 overflow-hidden gap-1">
          {Array(Nota || 0)
            ?.fill(null)
            ?.map((_, index) => (
              <img key={index} src={Star} className="w-[18px] h-[18px]" />
            ))}
        </div>
        <p className="text-[#dd3842] text-[17px] font-[600] leading-[20px]">
          R$ {String(Price?.toFixed(2))?.replace(".", ",")}
        </p>
        <button
          style={{
            fontFamily: "Open Sans, sans-serif",
            transition: "color .2s, background-color .4s",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
          className="w-full items-center justify-center py-[10px] text-[#0c2d57] bg-transparent h-[44px] border border-[#0c2d57] rounded hover:border-[#dd3842] hover:bg-[#dd3842] hover:text-white"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};
