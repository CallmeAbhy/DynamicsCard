import React from "react";

const Headline = ({ invitor }) => {
  return (
    <div class="flex flex-col items-center justify-center">
      <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text mt-5">
        {invitor}
      </p>
    </div>
  );
};

export default Headline;
