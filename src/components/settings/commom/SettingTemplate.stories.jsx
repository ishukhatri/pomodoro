import SettingTemplate from "./SettingTemplate";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default {
  component: SettingTemplate,
};

function MyRadioGroup() {
  let [plan, setPlan] = useState("startup");

  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Business</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

const Template = (args) => (
  <SettingTemplate {...args}>
    <MyRadioGroup />
  </SettingTemplate>
);

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const desktop = Template.bind({});
desktop.args = {
  name: "color",
};
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
