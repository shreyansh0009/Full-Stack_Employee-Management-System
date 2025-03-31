import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-black p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded-md font-medium">
        <h2 className="w-1/5">Employee Name</h2>
        <h5 className="w-1/5">New Task</h5>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed Task</h5>
        <h5 className="w-1/5">Failed Task</h5>
      </div>

      <div className="">
        {authData.employees.map(function (e, idx) {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-md font-medium" key={idx}>
              <h2 className="w-1/5 text-white font-bold">{e.firstName}</h2>
              <h5 className="w-1/5 text-yellow-400 rounded-md font-bold">{e.taskNumber.newTask}</h5>
              <h5 className="w-1/5 text-blue-400 rounded-md font-bold">{e.taskNumber.active}</h5>
              <h5 className="w-1/5 text-green-500 rounded-md font-bold">{e.taskNumber.completed}</h5>
              <h5 className="w-1/5 text-red-600 rounded-md  font-bold">{e.taskNumber.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
