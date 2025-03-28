import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ResultsDisplay = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <div className="text-blue-500">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!results) return <div>No results to display.</div>;

  return (
    <div>
      <h2 className="text-lg font-bold">Results</h2>
      <LineChart width={600} height={300} data={results}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ResultsDisplay;
