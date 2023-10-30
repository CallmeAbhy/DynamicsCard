import React from "react";

const Header = ({ handlePrint, handleDownload, handleShare }) => {
  return (
    <div>
      <div>
        {/* Header Starts */}
        <header className="flex flex-col items-center jusify-center my-5">
          <div className=" text-indigo-600 py-8 text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-3">
              Craft Your Wedding Card
            </h1>
            <p className="text-lg md:text-xl text-pink-700">
              Create the perfect wedding card for your special day.
            </p>
          </div>

          <div className="flex flex-row justify-center items-center">
            <button
              className="mt-3 sm:mt-0 bg-gray-500 text-white font-bold py-2 px-6 sm:px-8 rounded shadow-md border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 mx-2"
              onClick={handlePrint}
            >
              Print
            </button>
            <button
              className="mt-3 sm:mt-0 bg-blue-500 text-white font-bold py-2 px-6 sm:px-8 rounded shadow-md border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mx-2"
              onClick={handleDownload}
            >
              Download
            </button>
            <button
              className="mt-3 sm:mt-0 bg-green-500 text-white font-bold py-2 px-6 sm:px-8 rounded shadow-md border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 mx-2"
              onClick={handleShare}
            >
              Share
            </button>
          </div>
        </header>
        {/* Header Ends */}
      </div>
    </div>
  );
};

export default Header;
