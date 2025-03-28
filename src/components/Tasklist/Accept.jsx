import React from "react";

const Accept = ({data}) => {
  return (
    <div className="h-full w-[30%] rounded-xl shrink-0 bg-yellow-300">
      <div className="flex justify-between p-5">
        <h3 className="font-semibold bg-red-600 p-1 px-5 rounded-md">{data.taskCategory}</h3>
        <h3 className="font-semibold">{data.taskDate}</h3>
      </div>

      <div className="px-5">
        <h1 className="font-bold text-3xl mb-3">{data.taskTitle}</h1>
        <p>
        {data.taskDescription}
        </p>
      </div>

      <div className="mt-6 flex justify-left">
        <button className="bg-green-500 p-1.5 rounded-md mx-5 cursor-pointer text-sm">Mark as complete</button>
        <button className="bg-red-500 p-1.5 rounded-md mx-5 cursor-pointer text-sm">Mark as failed</button>

      </div>
    </div>
  );
};

export default Accept;
