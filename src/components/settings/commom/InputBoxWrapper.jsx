import InputBox from "./InputBox";

const InputBoxWrapper = ({ name }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="opacity-40 text-slate-800 text-xs font-bold">{name}</h3>
      <InputBox></InputBox>
    </div>
  );
};

export default InputBoxWrapper;
