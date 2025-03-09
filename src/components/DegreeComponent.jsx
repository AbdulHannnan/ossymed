import React from "react";

const DegreeComponent = () => {
  return (
    <div className="bg-white py-12  lg:px-56 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-3xl px-4 lg:text-4xl font-bold text-gray-900">Find your next degree</h2>
        <p className="text-green-600 mt-2 lg:text-xl px-4">
          Sign up and start working right now on your next big thing.
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600">
          SIGN IN
        </button>
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default DegreeComponent;
