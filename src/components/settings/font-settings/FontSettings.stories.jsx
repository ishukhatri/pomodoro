import FontSettings from "./FontSettings";

export default {
  component: FontSettings,
};

const Template = (args) => <FontSettings {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
