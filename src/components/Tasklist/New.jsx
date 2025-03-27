import React from "react";

const New = () => {
  return (
    <div className="h-full w-[30%] rounded-xl shrink-0 bg-green-300">
      <div className="flex justify-between p-5">
        <h3 className="font-semibold bg-yellow-600 p-1 px-5 rounded-md">Low</h3>
        <h3 className="font-semibold">03 Feb 2025</h3>
      </div>

      <div className="px-5">
        <h1 className="font-bold text-3xl mb-3">
          Create static web page!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam?
          Numquam ex voluptas delectus architecto.
        </p>
      </div>
      <div className="mt-6 flex justify-left">
        <button className="bg-green-600 p-1.5 rounded-md mx-5 cursor-pointer text-sm">Accept Task</button>
        <button className="bg-red-600 p-1.5 rounded-md mx-5 cursor-pointer text-sm">Deny Task</button>

      </div>
    </div>
  );
};

export default New;
