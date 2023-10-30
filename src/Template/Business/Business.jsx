import React, { useState, useRef, useEffect } from "react";

import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import logo from "../Image/ribbon.png";
import QR from "../Image/Qr.jpg";
import Name from "./Business/Name/Name";
import Info from "./Business/Details/Info";
import Qr from "./Business/QR/Qr";
import Company from "./Business/Logo/Company";
import Buttons from "./Business/Tools/Buttons";
import Nav from "./Business/Nav/Nav";

const Business = () => {
  const [showcard, setShowcard] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [domain, setDomain] = useState("");
  const [phone, setPhone] = useState("");
  const [web, setWeb] = useState("");
  const [location, setLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [social, setSocial] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#00000"); // Set a default background color
  const [autocomplete, setAutocomplete] = useState(null);
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const divRef = useRef(null);
  const fontFamilies = [
    "Arial, sans-serif",
    "Arial Black, sans-serif",
    "Times New Roman, serif",
    "Georgia, serif",
    "Palatino Linotype, Book Antiqua, Palatino, serif",
    "Bookman Old Style, Bookman, serif",
    "Trebuchet MS, sans-serif",
    "Lucida Grande, sans-serif",
    "Verdana, Geneva, sans-serif",
    "Tahoma, Geneva, sans-serif",
    "Geneva, sans-serif",
    "Poppins, sans-serif",
    "Helvetica, sans-serif",
    "Tahoma, sans-serif",
    "Courier New, Courier, monospace",
    "Lucida Console, Monaco, monospace",
    "monospace",
    // Add more font family options as needed
  ];
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(true); // Initially, assume the number is valid

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);

    // Regular expression to validate a mobile number
    const phoneRegex = /^\+91 [1-9][0-9]{9}$/; // Modify this regex as needed

    if (phoneRegex.test(phoneNumber)) {
      setIsValidMobileNumber(true);
    } else {
      setIsValidMobileNumber(false);
    }
  };

  function handlePrint() {
    const divToPrint = divRef.current;

    if (divToPrint) {
      // Set the background color of the body to match the div's background color
      document.body.style.backgroundColor = backgroundColor;

      // Show QR code on print
      const qrCode = document.getElementById("qrCode"); // Replace 'qrCode' with the actual ID of your QR code element
      if (qrCode) {
        qrCode.style.display = "block"; // Display the QR code
      }

      // Copy the content of the div to the body
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = divToPrint.innerHTML;

      // Print the page
      window.print();

      // Restore the original body background color and content
      document.body.style.backgroundColor = "white";
      document.body.innerHTML = originalContent;

      // Hide the QR code after printing
      if (qrCode) {
        qrCode.style.display = "none"; // Hide the QR code
      }
    }
  }

  const handleFontFamilyChange = (family) => {
    setFontFamily(family);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Check if the Web Share API is available

        const div = divRef.current;

        if (div) {
          const blob = new Blob([div.outerHTML], { type: "text/html" });
          const file = new File([blob], "card.html", { type: "text/html" });

          const shareData = {
            files: [file],
          };

          await navigator.share(shareData);
        } else {
          console.error("Div reference is not available.");
        }
      } else {
        console.error("Web Share API is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };
  const handleDownload = () => {
    // Use html2canvas to capture the div content and convert it to an image.
    html2canvas(divRef.current).then((canvas) => {
      // Convert the canvas to a data URL.
      const imgData = canvas.toDataURL("image/png");

      // Use FileSaver.js to save the image as a file.
      saveAs(imgData, "colorful_div.png");
    });
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-xl xl:mx-auto bg-white rounded shadow">
      {showcard ? (
        <>
          <section>
            <div>
              <Buttons
                handleShare={handleShare}
                handleDownload={handleDownload}
                handlePrint={handlePrint}
              />
            </div>
            <div
              style={{ fontFamily: fontFamily, padding: "20px" }}
              ref={divRef}
            >
              <div className="grid grid-cols-3 ">
                <div className="col-span-2 space-y-2 ">
                  <Name
                    name={name}
                    surname={surname}
                    domain={domain}
                    backgroundColor={backgroundColor}
                  />

                  <Info
                    phone={phone}
                    web={web}
                    location={location}
                    backgroundColor={backgroundColor}
                  />
                </div>

                <div className="col-span-1 flex flex-col">
                  <Company image={selectedImage} />

                  <Qr social={social} />
                </div>

                {/* Divider Line */}

                <div
                  className="col-span-3 my-4"
                  style={{
                    background: `linear-gradient(to left, transparent, ${backgroundColor}, transparent), linear-gradient(to right, transparent, ${backgroundColor}, transparent)`,
                    backgroundSize: "70% 4px, 70% 4px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom, right bottom",
                    height: "2px",
                    backgroundImage: `linear-gradient(to left, transparent, ${backgroundColor}, transparent), linear-gradient(to right, transparent, ${backgroundColor}, transparent)`,
                    backgroundSize: "50% 2px, 50% 2px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom, right bottom",
                    height: "4px",
                    borderBottom: "1px solid white",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowcard(false)}
                className="w-full h-12 rounded-md bg-red-500 hover:text-red-600 hover:bg-transparent border-2 text-white font-bold md:mt-8"
              >
                Edit Information
              </button>
            </div>
          </section>
        </>
      ) : (
        <section>
          <div className="flex flex-col items-center">
            <Nav />
            <div className="text-center py-4 md:py-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">
                📇 Design Your Business Card 📊
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                Create a professional and eye-catching business card for your
                company or brand.
              </p>
            </div>
          </div>
          <div>
            <article className="md:grid grid-cols-2 gap-10 md:mt-10">
              <div className="flex flex-col">
                <label htmlFor="Name">Logo with Company Name</label>

                <input
                  type="file"
                  accept="image/*"
                  id="Name"
                  placeholder="JOHN"
                  autoComplete="off"
                  onChange={handleImageUpload}
                  className="resize-none border rounded-md p-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Surname">Image Preview</label>

                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="max-w-full h-auto rounded border"
                  />
                )}
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-10">
              <div className="flex flex-col">
                <label htmlFor="Name">Enter Name</label>

                <input
                  type="text"
                  name="text"
                  id="Name"
                  placeholder="JOHN"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="resize-none border rounded-md p-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Surname">Enter Surname</label>

                <input
                  type="text"
                  name="text"
                  id="Surname"
                  placeholder="Smith"
                  autoComplete="off"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="resize-none border rounded-md p-2"
                />
              </div>
            </article>

            <div className="flex flex-col justify-center">
              <label htmlFor="Domain">Enter Designation</label>

              <input
                type="text"
                name="text"
                id="Domain"
                placeholder="Full Stack Developer"
                autoComplete="off"
                value={domain}
                className="resize-none border rounded-md"
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="Link">Enter Website</label>

              <input
                type="link"
                name="text"
                id="Link"
                placeholder="www.google.com"
                autoComplete="off"
                value={web}
                className="resize-none border rounded-md"
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="Phone">Enter Mobile Number</label>

              <input
                type="tel"
                name="text"
                id="Phone"
                placeholder="+91 8928592418 Must be in this format"
                autoComplete="off"
                value={phone}
                className={`resize-none border rounded-md ${
                  isValidMobileNumber ? "" : "border-red-500"
                }`}
                onChange={handlePhoneChange}
              />
              {!isValidMobileNumber && (
                <p className="text-red-500">
                  Please enter a valid mobile number.
                </p>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="Map">Enter Address</label>

              <input
                type="text"
                name="text"
                id="Map"
                placeholder="East Sector, IMDB"
                autoComplete="off"
                value={location}
                className="resize-none border rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="BackgroundColor">Select Background Color</label>

              <input
                type="color"
                id="BackgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:mb-4 mb-4">
              <label htmlFor="fontFamily" className="text-lg font-bold">
                Font Family:
              </label>

              <select
                id="fontFamily"
                value={fontFamily}
                onChange={(e) => handleFontFamilyChange(e.target.value)}
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-400"
              >
                {fontFamilies.map((family) => (
                  <option key={family} value={family}>
                    {family.split(",")[0]}
                  </option>
                ))}
              </select>
            </div>
            <p
              className="text-lg font-bold"
              style={{ fontFamily: fontFamily, color: backgroundColor }}
            >
              This is Sample text
            </p>

            <div className="flex flex-col justify-center">
              <label htmlFor="Social">Enter Social Profile Link(For QR)</label>

              <input
                type="text"
                name="text"
                id="Social"
                placeholder="provide any link like facebook,whatsapp or website"
                autoComplete="off"
                value={social}
                className="resize-none border rounded-md"
                onChange={(e) => setSocial(e.target.value)}
              />
            </div>

            <button
              onClick={() => setShowcard(true)}
              className="w-full h-12 rounded-md bg-red-500 hover:text-red-600 hover:bg-transparent border-2 text-white font-bold md:mt-8"
            >
              Preview
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Business;
