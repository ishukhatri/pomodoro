import React from "react";
import SettingTemplate from "../commom/SettingTemplate";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import SettingRadioOptionWrapper from "../commom/SettingRadioOptionWrapper";

export const ColorRadioOption = ({ checked, color }) => {
  return (
    <SettingRadioOptionWrapper>
      <div className={`w-full h-full rounded-full ${`bg-${color}`}`}>
        {checked && <div>i</div>}
      </div>
    </SettingRadioOptionWrapper>
  );
};

export const ColorRadioGroup = () => {
  let [color, setColor] = useState("red");
  const colorOptions = [
    { value: "red", className: "red-400" },
    { value: "cyan", className: "cyan-300" },
    { value: "fuchsia", className: "fuchsia-400" },
  ];

  return (
    <RadioGroup value={color} onChange={setColor} className={`flex gap-4`}>
      {colorOptions.map((colorOption) => (
        <RadioGroup.Option key={colorOption.value} value={colorOption.value}>
          {({ checked }) => (
            <ColorRadioOption checked={checked} color={colorOption.className} />
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

const ColorSettings = ({ text }) => {
  return (
    <SettingTemplate name={"Color"}>
      <ColorRadioGroup></ColorRadioGroup>
    </SettingTemplate>
  );
};

export default ColorSettings;
