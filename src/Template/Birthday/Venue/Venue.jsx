import React from "react";

const Venue = ({ venue, state, area }) => {
  return (
    <div>
      <div class="flex flex-col items-center justify-center p-4">
        <h1 class="text-2xl font-bold italic underline">Venue</h1>
        <h2 class="text-xl font-semibold">{venue}</h2>
        <h3 class="text-xl font-semibold">{area}</h3>
        <p class="text-lg">{state}</p>
      </div>
      {/* <p class="italic text-center">The quick brown fox ...</p> */}
    </div>
  );
};

export default Venue;
