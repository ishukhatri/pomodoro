import React from "react";
import CircleTemplate from "../commom/SettingRadioOptionWrapper";
import SettingTemplate from "../commom/SettingTemplate";
import FontRadioGroup from "./FontRadioGroup";

const FontSettings = ({ text }) => {
  return (
    <SettingTemplate name={"Font"}>
      <FontRadioGroup></FontRadioGroup>
    </SettingTemplate>
  );
};

export default FontSettings;
