import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Table = (props) => {
    const {theads = [], tbodies = []} = props;
    return (
        <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                  {
                      theads.map((thead,index)=>{
                          return <th key={index} className="px-4 py-3">{thead}</th>
                      })
                  }
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {tbodies.map((item, i) => {
                  return (
                    <tr
                      key={item.id}
                      className="text-gray-700 dark:text-gray-400 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <p className="font-semibold">{item.menuName}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ {item.price}</td>
                      <td className="px-4 py-3 text-xs">
                        <img
                          src={item.menuImage}
                          height="50"
                          width="50"
                          alt=""
                          loading="lazy"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm">{item.ingredients}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                            onClick={(e) => {
                              props.actionEdit(e, item);
                            }}
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </button>
                          <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    );
};

export default Table;