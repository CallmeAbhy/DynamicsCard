import React from "react";

const BigText = ({ name, birthday }) => {
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-center text-2xl font-bold">{name}</h1>
        <h2 class="text-center text-xl font-semibold">{birthday}</h2>
      </div>
    </div>
  );
};

export default BigText;
