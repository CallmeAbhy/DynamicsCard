import React from "react";

const Notes = ({ notes }) => {
  return (
    <div class="flex flex-col justify-center items-center mt-5">
      {/* <div class="text-center text-4xl font-bold">
        REQUEST THE PLEASURE OF YOUR COMPANY
      </div>
      <div class="text-center text-2xl font-bold">AT THEIR MARRIAGE</div> */}
      <div class="text-center text-xl font-normal">{notes}</div>
    </div>
  );
};

export default Notes;
