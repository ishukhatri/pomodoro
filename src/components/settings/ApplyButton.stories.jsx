import ApplyButton from "./ApplyButton";

export default {
  component: ApplyButton,
};

const Template = (args) => <ApplyButton {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  //   name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
