import ColorRadioOption from "./ColorRadioOption";

export default {
  component: ColorRadioOption,
};

const Template = (args) => <ColorRadioOption {...args} />;

export const notChecked = Template.bind({});
notChecked.args = {
  checked: false,
};
notChecked.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const checked = Template.bind({});
checked.args = {
  checked: true,
};
checked.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
