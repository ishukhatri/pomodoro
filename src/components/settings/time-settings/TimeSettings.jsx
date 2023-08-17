import InputBoxWrapper from "../commom/InputBoxWrapper";
import SettingName from "../commom/SettingName";
import SettingTemplate from "../commom/SettingTemplate";

const TimeSettings = () => {
  return (
    <SettingTemplate name={"Time (Minutes)"}>
      <div className="flex flex-col gap-2 w-full">
        <InputBoxWrapper name={"pomodoro"}></InputBoxWrapper>
        <InputBoxWrapper name={"short break"}></InputBoxWrapper>
        <InputBoxWrapper name={"long break"}></InputBoxWrapper>
      </div>
    </SettingTemplate>
    // <div className="flex flex-col gap-2">
    //   <div className="mb-4 flex justify-center">
    //     <SettingName name={"Time (Minutes)"} />
    //   </div>

    // </div>
  );
};

export default TimeSettings;
