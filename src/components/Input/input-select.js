import React from "react";

const FormSelect = (props) => {
  const { title, dataOptions = [], extendClass = "", valueInit = 1 } = props;
  console.log(dataOptions, valueInit);
  return (
    <label className="block w-1/2 ml-4">
      <span className="text-gray-700">{title}</span>
      <select
        className={`
        block w-full mt-1 form-select 
        focus:border-purple-400 focus:outline-none focus:shadow-outline-purple 
        border rounded-lg form-input ${extendClass}`}
        defaultValue={valueInit}
      >
        {dataOptions.map((data) => {
          return (
            <option key={data.value} value={data.value}>
              {data.text}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default FormSelect;
