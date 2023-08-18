import FontRadioOption from "./FontRadioOption";

export default {
  component: FontRadioOption,
};

const Template = (args) => <FontRadioOption {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
