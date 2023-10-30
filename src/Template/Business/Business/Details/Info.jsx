import React from "react";
import { FaPhone, FaGlobe, FaMapMarker } from "react-icons/fa";

const Info = ({ phone, web, location, backgroundColor }) => {
  return (
    <div className="items-center">
      <div className="flex items-center">
        <div
          className="p-2 rounded-full"
          style={{ backgroundColor: backgroundColor }}
        >
          <FaPhone size={24} className="text-white" />
        </div>
        <span className="text-black ml-2"> {phone}</span>
      </div>
      <div className="flex items-center mt-4">
        <div
          className="p-2 rounded-full"
          style={{ backgroundColor: backgroundColor }}
        >
          <FaGlobe size={24} className="text-white" />
        </div>
        <a
          href={
            web.startsWith("http://") || web.startsWith("https://")
              ? web
              : `http://${web}`
          }
          target="_blank"
        >
          <span className="text-black ml-2">{web}</span>
        </a>
      </div>
      <div className="flex items-center mt-4">
        <div
          className="p-2 rounded-full"
          style={{ backgroundColor: backgroundColor }}
        >
          <FaMapMarker size={24} className="text-white" />
        </div>
        <span className="text-black ml-2">{location}</span>
      </div>
    </div>
  );
};

export default Info;
