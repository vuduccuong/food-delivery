import React from "react";

const FormArea = (props) => {
  const {
    title,
    row = 3,
    col,
    placeholder = "",
    extendClass,
    myRef,
  } = props;
  return (
    <label className="block mt-4 text-sm">
      <span className="text-gray-700">{title}</span>
      <textarea
        className={`block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border rounded-lg ${extendClass}`}
        rows={row}
        cols={col}
        placeholder={placeholder}
        ref={myRef}
      ></textarea>
    </label>
  );
};

export default FormArea;
