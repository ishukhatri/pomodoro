import React from "react";
import SettingName from "./SettingName";

const SettingTemplate = ({ name, children }) => {
  return (
    <section className="setting flex flex-col gap-[18px] items-center">
      <div className="flex items-center">
        <SettingName name={name} />
      </div>
      {children}
    </section>
  );
};

export default SettingTemplate;
