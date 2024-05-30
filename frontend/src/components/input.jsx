export const Input = ({ Label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="">{Label}</label>
      <input {...rest} className="rounded-md h-8" />
    </div>
  );
};
