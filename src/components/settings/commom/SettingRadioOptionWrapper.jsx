import React from "react";

const SettingRadioOptionWrapper = ({ children }) => {
  return (
    <label
      className={`rounded-full h-10 w-10 flex justify-center items-center`}
    >
      {children}
    </label>
  );
};

export default SettingRadioOptionWrapper;
