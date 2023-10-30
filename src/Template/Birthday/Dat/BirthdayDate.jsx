import React from "react";

const Date = ({ colour, date, day, month, time }) => {
  return (
    <div class="flex items-center justify-center my-2">
      <p class="text-xl font-bold border-t-2 border-b-2 border-gray-600 mr-4">
        {day}
      </p>
      <div
        class="w-20 h-20 rounded-full flex flex-col items-center justify-center  font-semibold text-lg mr-4"
        style={{ backgroundColor: colour, color: "white" }}
      >
        <p class="text-center">{date}</p>
        <p class="text-center text-xs">{month}</p>
      </div>
      <p class="text-xl border-t-2 border-b-2 border-gray-600">{time}</p>
    </div>
  );
};

export default Date;
