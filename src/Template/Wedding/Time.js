import React from "react";

const Time = ({ date, onwards, barrat, lunch }) => {
  return (
    <div>
      {/* Timings */}
      <div class="flex flex-col items-center justify-center bg-transparent">
        <h1 class="text-2xl font-bold text-center">{date}</h1>
        <h3 class="text-xl font-bold text-center">{onwards}</h3>
        <h3 class="text-xl font-bold text-center">
          <span>Baraat: </span> {barrat}
        </h3>
        <h3 class="text-xl font-bold text-center">
          <span>Dinner: </span> {lunch}
        </h3>
      </div>
      {/* End of Timings */}
    </div>
  );
};

export default Time;
