import InputBox from "./InputBox";

export default {
  component: InputBox,
};

const Template = (args) => <InputBox {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
