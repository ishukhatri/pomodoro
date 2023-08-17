import SettingName from "./SettingName";

export default {
  component: SettingName,
};

const Template = (args) => <SettingName {...args} />;

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
