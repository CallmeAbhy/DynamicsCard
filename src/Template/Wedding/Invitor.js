import React from "react";

const Invitor = ({ invitor, invitorDescription }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {/* Your Details */}

      <section className="text-center">
        <h2 className="text-xl font-bold mb-2">{invitor}</h2>
        <p>{invitorDescription}</p>
      </section>
      {/* End of Your Details */}
    </div>
  );
};

export default Invitor;
