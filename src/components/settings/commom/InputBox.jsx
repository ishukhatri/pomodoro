import React from "react";

/* Chrome, Safari, Edge, Opera */
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

// /* Firefox */
// input[type=number] {
//   -moz-appearance: textfield;
// }
const InputBox = () => {
  // https://react-hook-form.com/docs/useformcontext
  return (
    <input
      type="number"
      min="25"
      max="60"
      className="appearance-none w-36 h-10 bg-slate-100 rounded-[10px] p-4 text-slate-800 text-sm font-bold"
    />
  );
};

export default InputBox;
