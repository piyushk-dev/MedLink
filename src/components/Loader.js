import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 animate-spin"></div>
      </div>
      <p className="text-sm text-gray-400 font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default Loader;
