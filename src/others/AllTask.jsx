import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  if (!authData || !authData.employees) {
    return <p>Loading employees...</p>;
  }

  return (
    <div className="bg-black p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded-md">
        <h2 className="font-medium">Employee Name</h2>
        <h5 className="w-1/5 bg-red-600 rounded-md">New Task</h5>
        <h5 className="w-1/5 bg-red-600 rounded-md">Active Task</h5>
        <h5 className="w-1/5 bg-red-600 rounded-md">Completed Task</h5>
        <h5 className="w-1/5 bg-red-600 rounded-md">Failed Task</h5>
      </div>

      <div className="">
        {authData.employees.map(function (e) {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-md" key={e.firstName}>
              <h2>{e.firstName}</h2>
              <h3 className="w-1/5 text-blue-600 rounded-md">Task</h3>
              <h5 className="w-1/5 text-yellow-400 rounded-md">New Task</h5>
              <h5 className="w-1/5 text-white-600 rounded-md">Active Task</h5>
              <h5 className="w-1/5 text-red-600 rounded-md">Completed Task</h5>
              <h5 className="w-1/5 text-red-600 rounded-md">Failed Task</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
