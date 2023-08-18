import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import FontRadioOption from "./FontRadioOption";
import { roboto_slab, kumbh_sans, space_mono } from "@/app/fonts";

const FontRadioGroup = () => {
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

export default FontRadioGroup;
