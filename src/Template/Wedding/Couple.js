import React from "react";

const Couple = ({ husband, wife, husbandDetails, wifeDetails }) => {
  return (
    <div>
      {/* Couple Details */}
      <div class="flex flex-col items-center justify-center p-4">
        <h1 class="text-4xl font-bold text-center">{husband}</h1>
        <p class="text-center">({husbandDetails})</p>
        <h1 class="text-4xl font-bold text-center">{wife}</h1>
        <p class="text-center">({wifeDetails})</p>
      </div>

      {/* End of Couple Details */}
    </div>
  );
};

export default Couple;
