import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, addQueryToHistory } from "../store/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(addQueryToHistory(query)); // Add to history
    dispatch(submitQuery(query)); // Fetch results
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your query..."
        className="border p-2 flex-grow rounded-lg"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default QueryInput;
