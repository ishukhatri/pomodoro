import React from "react";
import CircleTemplate from "../commom/CircleTemplate";
import SettingTemplate from "../commom/SettingTemplate";

const FontSettings = ({ text }) => {
  return (
    <SettingTemplate name={"Font"}>
      <div className="flex gap-4">
        <CircleTemplate>
          <div
            className="Aa opacity-75 text-slate-800 w-full h-full text-[15px] font-normal 
        bg-slate-100  flex items-center justify-center rounded-full"
          >
            Aa
          </div>
        </CircleTemplate>
        <CircleTemplate>
          <div
            className="Aa opacity-75 text-slate-800 w-full h-full text-[15px] font-normal 
        bg-slate-100  flex items-center justify-center rounded-full"
          >
            Aa
          </div>
        </CircleTemplate>
        <CircleTemplate>
          <div
            className="Aa opacity-75 text-slate-800 w-full h-full text-[15px] font-normal 
        bg-slate-100  flex items-center justify-center rounded-full"
          >
            Aa
          </div>
        </CircleTemplate>
      </div>
    </SettingTemplate>
  );
};

export default FontSettings;
