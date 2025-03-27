import React from "react";

const Complete = () => {
  return (
    <div className="h-full w-[30%] rounded-xl shrink-0 bg-blue-300">
      <div className="flex justify-between p-5">
        <h3 className="font-semibold bg-red-600 p-1 px-5 rounded-md">High</h3>
        <h3 className="font-semibold">1 Feb 2025</h3>
      </div>

      <div className="px-5">
        <h1 className="font-bold text-3xl mb-3">Meeting with US-Client!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam?
          Numquam ex voluptas delectus architecto.
        </p>
      </div>

      <div className="mt-6 flex justify-left">
        <button className="bg-green-600 p-1.5 rounded-md mx-5 cursor-pointer text-sm">Mark Completed!</button>
      </div>
    </div>
  );
};

export default Complete;
