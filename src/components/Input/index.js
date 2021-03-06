import React from "react";

const FormInput = (props) => {
  const {
    title,
    placeholder = "",
    extendClass = "",
    type = "text",
    myRef,
  } = props;
  return (
    <label className={`block w-1/2 ${extendClass}`}>
      <span className="text-gray-700">{title}</span>
      <input
        className={`block w-full mt-1 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border rounded-lg form-input`}
        type={type}
        placeholder={placeholder}
        ref={myRef}
      />
    </label>
  );
};

export default FormInput;
