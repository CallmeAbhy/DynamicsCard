import React from "react";

const Heading = ({ handleShare, handleDownload, handlePrint }) => {
  return (
    <div>
      <div>
        <div>
          {/* Header Starts */}
          <header className="flex flex-col items-center jusify-center my-5">
            <div className=" text-green-600  text-center">
              <h1 className="font-bold text-4xl md:text-5xl mb-3">
                Design Your Business Card
              </h1>
              <p className="text-lg md:text-xl text-yellow-500">
                Create a professional and eye-catching business card for your
                company or brand.
              </p>
            </div>

            <div className="flex flex-row justify-center items-center md:mt-4 mt-4">
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
    </div>
  );
};

export default Heading;
