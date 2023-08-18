import React from "react";
import SettingTemplate from "../commom/SettingTemplate";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { roboto_slab, kumbh_sans, space_mono } from "@/app/fonts";
import SettingRadioOptionWrapper from "../commom/SettingRadioOptionWrapper";

export const FontRadioOption = ({ checked }) => {
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

export const FontRadioGroup = () => {
  let [font, setFont] = useState("Kumbh-Sans");
  const fontOptions = [
    { value: "Kumbh-Sans", className: kumbh_sans.className },
    { value: "Roboto-Slab", className: roboto_slab.className },
    { value: "Space-Mono", className: space_mono.className },
  ];

  return (
    <RadioGroup value={font} onChange={setFont} className={`flex gap-4`}>
      {fontOptions.map((fontOption) => (
        <RadioGroup.Option
          key={fontOption.value}
          value={fontOption.value}
          className={fontOption.className}
        >
          {({ checked }) => <FontRadioOption checked={checked} />}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

const FontSettings = ({ text }) => {
  return (
    <SettingTemplate name={"Font"}>
      <FontRadioGroup></FontRadioGroup>
    </SettingTemplate>
  );
};

export default FontSettings;
