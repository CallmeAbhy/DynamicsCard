import React from "react";

const Company = ({ image }) => {
  return (
    <div>
      <img src={image} width={120} height={120} className="mb-4" />
    </div>
  );
};

export default Company;
