import TimeSettings from "./TimeSettings";

export default {
  component: TimeSettings,
};

const Template = (args) => <TimeSettings {...args} />;

export const mobile = Template.bind({});
mobile.args = {
  name: "color",
};
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
