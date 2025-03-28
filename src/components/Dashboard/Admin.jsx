import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";

const Admin = ({ data, handleLogout }) => {
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div>
          <Header data={data} handleLogout={handleLogout} />
        </div>

        <div className="text-white mt-10 text-xl font-semibold bg-zinc-600 flex items-center justify-between">
          <CreateTask />
        </div>
      </div>
    </>
  );
};

export default Admin;
