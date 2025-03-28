import React from "react";
import QueryInput from "./QueryInput";
import QueryHistory from "./QueryHistory";
import ResultsDisplay from "./ResultsDisplay";

const Dashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Data Query Dashboard</h1>
      <QueryInput />
      <QueryHistory />
      <ResultsDisplay />
    </div>
  );
};

export default Dashboard;
