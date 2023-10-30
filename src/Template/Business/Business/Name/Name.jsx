import React from "react";

const Name = ({ name, surname, domain, backgroundColor }) => {
  return (
    <div className="items-center mb-10">
      <div className="text-2xl text-black">
        <span className="font-extrabold" style={{ color: backgroundColor }}>
          {name}
        </span>{" "}
        <span className="text-normal">{surname}</span>
      </div>
      <p>{domain}</p>
    </div>
  );
};

export default Name;
