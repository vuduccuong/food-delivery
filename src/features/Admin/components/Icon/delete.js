import React from "react";

const IcDelete = (props) => {
  const { onDelete } = props;
  return (
    <div
      className="w-7 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
      onClick={onDelete}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
};

export default IcDelete;
