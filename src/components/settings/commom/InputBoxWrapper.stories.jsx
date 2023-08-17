import InputBoxWrapper from "./InputBoxWrapper";

export default {
  component: InputBoxWrapper,
};

const Template = (args) => <InputBoxWrapper {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "pomodoro",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
