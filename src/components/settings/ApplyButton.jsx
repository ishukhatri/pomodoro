import React from "react";

const ApplyButton = () => {
  return (
    /**
     * <div className="Group8 w-[140px] h-[53px] relative">
<div className="RectangleCopy4 w-[140px] h-[53px] left-0 top-0 absolute bg-red-400 rounded-[26.50px]" />
<div className="Apply left-[47px] top-[21px] absolute text-center text-white text-base font-bold">Apply</div>
</div>
     */
    <div
      className=" bg-white w-36 h-14 hover:opacity-80 rounded-[1.75rem] 
      flex items-center justify-center"
    >
      <button
        className="RectangleCopy4  w-36 h-14 
        bg-red-400 rounded-[1.75rem] "
      >
        <div className="Apply text-center text-white text-base font-semibold">
          Apply
        </div>
      </button>
    </div>
  );
};

export default ApplyButton;
