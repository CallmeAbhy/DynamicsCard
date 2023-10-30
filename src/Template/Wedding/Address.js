import React from "react";

const Address = ({ venue, area, state }) => {
  return (
    <div>
      {/* Address Details */}
      <div class="flex flex-col items-center justify-center p-4">
        <h1 class="text-2xl font-bold italic underline">Venue</h1>
        <h2 class="text-xl font-semibold">{venue}</h2>
        <h3 class="text-xl font-semibold">{area}</h3>
        <p class="text-lg">{state}</p>
      </div>

      {/* End of Your Address Details */}
    </div>
  );
};

export default Address;
