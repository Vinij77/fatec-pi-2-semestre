export const Input = ({ Label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="leading-[26px] font-medium text-[18px] mb-[3px] text-[#0c2d57]">
        {Label}
      </label>
      <input
        {...rest}
        style={{ transition: "border-color .5s" }}
        className="text-[14px] py-2 px-3 align-middle h-[50px] mb-[18px] leading-[18px] text-[#5c728e] bg-[#e7eaee] rounded border-none"
      />
    </div>
  );
};
