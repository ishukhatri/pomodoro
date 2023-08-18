import SettingRadioOptionWrapper from "../commom/SettingRadioOptionWrapper";
import Image from "next/image";

const ColorRadioOption = ({ checked }) => {
  return (
    <SettingRadioOptionWrapper>
      <div className="bg-cyan-300 w-full h-full rounded-full">
        {checked && <div>i</div>}
      </div>
    </SettingRadioOptionWrapper>
  );
};

export default ColorRadioOption;
