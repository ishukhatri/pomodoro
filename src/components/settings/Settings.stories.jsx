import Settings from "./Settings";

export default {
  component: Settings,
};

const Template = (args) => <Settings {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
