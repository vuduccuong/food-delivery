import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pager = (props) => {
  const {total} = props;
  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">Showing 1-{total} of {total}</span>
      <span className="col-span-2"></span>
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              <button
                className="px-3 py-1 border rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous"
                disabled={false}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                1
              </button>
            </li>
            <li>
              <button
                className="px-3 py-1 border rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Pager;
