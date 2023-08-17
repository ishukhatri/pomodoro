import ColorSetting from "./ColorSetting";

export default {
  component: ColorSetting,
};

const Template = (args) => <ColorSetting {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "pomodoro",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
