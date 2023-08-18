import SettingRadioOptionWrapper from "../commom/SettingRadioOptionWrapper";

const FontRadioOption = ({ checked }) => {
  return (
    <SettingRadioOptionWrapper>
      <div
        className={`Aa opacity-75 text-slate-800 w-full h-full text-[15px] font-normal 
         flex items-center justify-center rounded-full
        ${
          checked
            ? "bg-slate-900 text-white font-bold"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        Aa
      </div>
    </SettingRadioOptionWrapper>
  );
};

export default FontRadioOption;
