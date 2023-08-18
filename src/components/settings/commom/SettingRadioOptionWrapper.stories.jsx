import CircleTemplate from "./SettingRadioOptionWrapper";

export default {
  component: SettingRadioOptionWrapper,
};

const Template = (args) => <SettingRadioOptionWrapper {...args} />;

export const fontUnselected = Template.bind({});
fontUnselected.args = {
  bgColor: "bg-slate-100",
  children: (
    <div className="Aa opacity-75 text-slate-800 w-full h-full text-[15px] font-normal bg-slate-100  flex items-center justify-center">
      Aa
    </div>
  ),
};

export const fontSelected = Template.bind({});
fontSelected.args = {
  bgColor: "bg-slate-900",
  children: (
    <div className="Aa text-white w-full h-full text-[15px] font-bold bg-slate-900 rounded-full">
      Aa
    </div>
  ),
};

export const colorSelection = Template.bind({});
colorSelection.args = {
  bgColor: "bg-slate-900",
  children: <div className="bg-cyan-300 w-full h-full rounded-full"></div>,
};
