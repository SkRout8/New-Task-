import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">Query History</h2>
      <ul className="border rounded-lg p-2 bg-gray-50">
        {history.map((query, index) => (
          <li key={index} className="border-b py-2">
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
