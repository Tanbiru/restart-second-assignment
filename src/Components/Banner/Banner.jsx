import React from 'react';

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="flex justify-around gap-4 flex-wrap w-10/12 mx-auto mt-16 mb-16">
      {/* In-Progress box */}
      <div className="h-62.5 w-177 gradient-btn md:w-177 shadow-sm rounded-2xl flex flex-col justify-center items-center">
        <p className="text-white text-lg">In-Progress</p>
        <h3 className="text-white text-4xl font-bold mt-2">{inProgress}</h3>
      </div>

      {/* Resolved box */}
      <div className="h-62.5 w-177 md:w-177 bg-linear-to-r from-[#54CF68] to-[#00827A] shadow-sm rounded-2xl flex flex-col justify-center items-center">
        <p className="text-white text-lg">Resolved</p>
        <h3 className="text-white text-4xl font-bold mt-2">{resolved}</h3>
      </div>
    </div>
  );
};

export default Banner;