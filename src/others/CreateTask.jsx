import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full mt-10 mb-10">
      <form className="flex justify-between">
        <div className="flex flex-col items-start ml-10">
          <h3>Task Tittle:</h3>
          <input
            type="text"
            placeholder="Enter task tittle"
            className="mt-2 border-2 rounded-md w-2xl"
          />
          <h3 className="mt-2">Date</h3>
          <input type="date" className="mt-2 border-2 rounded-md w-2xl" />
          <h3 className="mt-2">Assign to:</h3>
          <input
            type="text"
            placeholder="Employee name:"
            className="mt-2 border-2 rounded-md w-2xl"
          />
          <h3 className="mt-2">Category:</h3>
          <input
            type="text"
            placeholder="Category"
            className="mt-2 border-2 rounded-md w-2xl"
          />
        </div>

        <div className="flex flex-col mr-15">
          <h3>Task Description:</h3>
          <textarea
            name=""
            id=""
            cols="40"
            rows="7"
            className="mt-2 border-2 rounded-md"
          />

          <button className="mt-4 bg-emerald-400 p-3 rounded-2xl cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
