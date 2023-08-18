import FontRadioGroup from "./FontRadioGroup";

export default {
  component: FontRadioGroup,
};

const Template = (args) => <FontRadioGroup {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
