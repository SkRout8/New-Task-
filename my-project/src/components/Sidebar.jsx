import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const history = useSelector((state) => state.query.history);
  return (
    <div className="w-72 bg-gradient-to-br from-gray-900 to-gray-800 text-white h-screen p-6 hidden md:flex flex-col shadow-xl rounded-r-2xl">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-100">Query History</h2>
      <ul className="space-y-2 flex-grow">
        {history.length === 0 ? (
          <li className="text-gray-400 text-sm italic">No queries yet...</li>
        ) : (
          history.map((query, index) => (
            <li
              key={index}
              className="bg-gray-700 hover:bg-gray-600 text-sm text-gray-200 p-3 rounded-lg cursor-pointer transition shadow-md"
            >
              {query}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Sidebar;