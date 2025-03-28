import React from "react";

import QueryInput from "./QueryInput";

import ResultsDisplay from "./ResultsDisplay";
import Sidebar from "./Sidebar";




const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Data Query Dashboard</h1>
        <QueryInput />
        <ResultsDisplay />
      </div>
    </div>
  );
};



export default Dashboard;
