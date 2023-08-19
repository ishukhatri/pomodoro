import React from "react";
import ColorSetting from "./color-settings/ColorSetting";
import FontSettings from "./font-settings/FontSettings";
import ApplyButton from "./apply-button/ApplyButton";
import TimeSettings from "./time-settings/TimeSettings";
import { useForm, FormProvider } from "react-hook-form";

const Divider = () => {
  return <div className="h-px bg-neutral-200" />;
};

const SettingTopBar = () => {
  return (
    <h1 className="Settings text-slate-900 text-xl font-bold">Settings</h1>
  );
};
const ThemeSettingBox = ({ children }) => {
  return (
    <div className="">
      <Divider />
      <div className="py-6">{children}</div>
    </div>
  );
};

const ThemeSettings = () => {
  return (
    <>
      <ThemeSettingBox>
        <FontSettings />
      </ThemeSettingBox>
      <ThemeSettingBox>
        <ColorSetting />
      </ThemeSettingBox>
    </>
  );
};

const Settings = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className=" bg-white rounded-2xl flex flex-col relative">
          <div className="p-6 pb-7">
            <SettingTopBar />
          </div>
          <Divider />
          <div className="p-6 flex gap-6 flex-col">
            <TimeSettings />
            <ThemeSettings />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <ApplyButton />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Settings;
