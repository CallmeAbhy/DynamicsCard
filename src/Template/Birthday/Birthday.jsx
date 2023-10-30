import React, { useState, useRef, useEffect } from "react";

import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import logo from "../Image/chatgpt.jpg";
import BigText from "./BigText/BigText";
import BirthdayDate from "./Dat/BirthdayDate";
import Headline from "./Headline/Headline";
import Image from "./Image/Image";
import Venue from "./Venue/Venue";
import image1 from "../Image/Birthday1.png";
import image2 from "../Image/Birthday2.jpg";
import image3 from "../Image/Birthday3.png";
import image4 from "../Image/Birthday4.png";
import image5 from "../Image/Birthday5.png";
import Profile from "../Image/Profile.png";
import "./Style.css";
import Nav from "./Nav/Nav";
import Heading from "./Tools/Heading";

const Birthday = () => {
  const images = [image1, image2, image3, image4, image5];
  const [showcard, setShowcard] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [image, setImage] = useState(null);
  const [fontColor, setFontColor] = useState("black");
  const [diagramColor, setDiagramColor] = useState("black");
  const [invitor, setInvitor] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [venue, setVenue] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [dateNumber, setDateNumber] = useState("");
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
  const handleFontFamilyChange = (family) => {
    setFontFamily(family);
  };
  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleDigramColor = (color) => {
    setDiagramColor(color);
  };

  useEffect(() => {
    if (selectedImage) {
      setBackgroundImage(`url(${selectedImage})`);
    } else {
      setBackgroundImage(""); // Set a default background if needed
    }
  }, [selectedImage]);

  const handleDesignChange = (image) => {
    setSelectedImage(image);
  };

  //   For ChatBot
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   User Input Image
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  //   const formatDateToWord = (dateString) => {
  //     if (dateString) {
  //       const dateObj = new Date(dateString);
  //       const options = { month: "long", day: "numeric" };
  //       return dateObj.toLocaleDateString("en-US", options);
  //     }
  //     return "";
  //   };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Extract day, date in number, and month from the selected date
    const dateObject = new Date(selectedDate);
    const options = { weekday: "long", day: "numeric", month: "long" };
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateObject);
    const dateNum = dateObject.getDate();
    const monthName = dateObject.toLocaleDateString("en-US", { month: "long" });

    setDay(dayName);
    setDateNumber(dateNum);
    setMonth(monthName);
  };
  const formateTimetoWord = (timeString) => {
    if (timeString) {
      const [hours, minutes] = timeString.split(":");
      const hour = parseInt(hours, 10);
      const minute = parseInt(minutes, 10);

      const period = hour >= 12 ? "PM" : "AM";

      const formattedhour = hour > 12 ? hour - 12 : hour;
      const formattedMinute = minute.toString().padStart(2, "0");

      return `${formattedhour}:${formattedMinute}  ${period}`;
    }

    return "";
  };

  const handleChangeTime = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    const formatted = formateTimetoWord(selectedTime);
    setFormattedTime(formatted);
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
  const handlePrint = () => {
    const printableContent = divRef.current;

    if (printableContent) {
      // Apply print-specific styles
      printableContent.style.backgroundColor = "white";

      // Open the print dialog
      window.print();

      // Restore original styles after printing (optional)
      printableContent.style.backgroundColor = ""; // Remove the background color

      // You can add more style adjustments as needed
    }
  };

  return (
    <div>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showcard ? (
          <div>
            <div>
              <Heading
                handlePrint={handlePrint}
                handleShare={handleShare}
                handleDownload={handleDownload}
              />
            </div>
            <div
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: fontColor,
                fontFamily: fontFamily,
              }}
              ref={divRef}
            >
              <Headline invitor={invitor} />
              <Image image={image} />
              <BigText name={name} birthday={birthday} />
              <BirthdayDate
                colour={diagramColor}
                date={dateNumber}
                day={day}
                month={month}
                time={formattedTime}
              />
              <Venue venue={venue} state={state} area={area} />
            </div>
            <div>
              <button
                onClick={() => setShowcard(false)}
                className="w-full h-12 rounded-md bg-green-500 hover:text-green-600 hover:bg-transparent border-2 text-white font-bold md:my-4 my-4"
              >
                Edit Information
              </button>
            </div>
          </div>
        ) : (
          <>
            <section>
              <div className="flex flex-col items-center">
                <Nav />
                <div className="text-center py-4 md:py-8">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
                    🎉 Craft Your Birthday Card 🎂
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                    Get creative and design the perfect birthday card for your
                    loved ones!
                  </p>
                </div>
              </div>
              <div>
                <main>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-32 h-32">
                      {image ? (
                        <img
                          src={image}
                          alt="Image"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-full">
                          <img
                            src={Profile}
                            alt="WhatsApp DP"
                            className="w-18 h-18 rounded-full"
                          />
                        </div>
                      )}
                    </div>
                    <label className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded-full">
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>

                  <div className="flex flex-col justify-center">
                    <label htmlFor="invitor">
                      Enter Invitation Description
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="invitor"
                      placeholder="Join us in this magical event"
                      autoComplete="off"
                      value={invitor}
                      className="resize-none border rounded-md"
                      onChange={(e) => setInvitor(e.target.value)}
                    />
                  </div>

                  <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                    <div className="flex flex-col">
                      <label htmlFor="Name">Name of Person</label>
                      <input
                        type="text"
                        name="text"
                        id="Name"
                        placeholder="Alexas"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="resize-none border rounded-md p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="Birthday">Enter No of Birthday</label>
                      <input
                        type="text"
                        name="text"
                        id="Birthday" // Make sure the 'id' matches the 'htmlFor' attribute in the label
                        placeholder="4th Birthday"
                        autoComplete="off"
                        value={birthday} // Make sure 'birthday' is used consistently here
                        onChange={(e) => setBirthday(e.target.value)}
                        className="resize-none border rounded-md p-2"
                      />
                    </div>
                  </article>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-4 mt-4">
                    <div className="flex flex-col border p-4 rounded-md">
                      <label htmlFor="date" className="text-lg font-bold mb-2">
                        Enter the Date of Birthday
                      </label>
                      <input
                        type="date"
                        name="text"
                        id="date"
                        placeholder="6 October"
                        autoComplete="off"
                        value={date}
                        onChange={handleDateChange}
                        className="border rounded-md p-2 "
                      />
                    </div>

                    <div className="flex flex-col border p-4 rounded-md ">
                      <label htmlFor="time" className="text-lg font-bold mb-2">
                        Enter the Time of Birthday
                      </label>
                      <input
                        type="time"
                        name="text"
                        id="time"
                        placeholder="2 pm onwards"
                        autoComplete="off"
                        value={time}
                        onChange={handleChangeTime}
                        className="border rounded-md p-2 "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:my-5 md:flex-row">
                    {/* Font Color */}
                    <div className="md:w-1/2 md:mr-5 border p-4 rounded-md md:mb-0 mb-4 md:mt-4 mt-4">
                      {" "}
                      {/* Add margin bottom for small screens */}
                      <label htmlFor="fontColor" className="text-lg font-bold">
                        Font Color:
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          id="fontColor"
                          value={fontColor}
                          onChange={(e) =>
                            handleFontColorChange(e.target.value)
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: fontColor }}
                        ></div>
                      </div>
                    </div>

                    {/* Diagram Color */}
                    <div className="md:w-1/2 border p-4 rounded-md">
                      {" "}
                      {/* No margin bottom for small screens */}
                      <label
                        htmlFor="diagramColor"
                        className="text-lg font-bold"
                      >
                        Diagram Color:
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          id="diagramColor"
                          value={diagramColor}
                          onChange={(e) => handleDigramColor(e.target.value)}
                          className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: diagramColor }}
                        ></div>
                      </div>
                    </div>
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
                    style={{ fontFamily: fontFamily, color: fontColor }}
                  >
                    This is Sample text
                  </p>

                  <article className="md:grid grid-cols-3 gap-10 md:mt-4">
                    <div className="flex flex-col">
                      <label htmlFor="venue">Enter Venue</label>
                      <input
                        type="text"
                        name="text"
                        id="venue"
                        placeholder="Town Hall, East Sector"
                        autoComplete="off"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="area">Enter City</label>
                      <input
                        type="text"
                        name="text"
                        id="area"
                        placeholder="Sayajiganj, Navapur City"
                        autoComplete="off"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="state">Enter State</label>
                      <input
                        type="text"
                        name="text"
                        id="state"
                        placeholder="Maharashtra"
                        autoComplete="off"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </article>
                  <div className="border-4 p-4 rounded-md md:my-20 md:mt-4 my-4">
                    <div className="flex">
                      <div className="w-1/2 p-4">
                        <img
                          src={selectedImage}
                          alt="Selected Image"
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="w-1/2 overflow-y-scroll">
                        <div className="space-y-2 p-4">
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className={`cursor-pointer transition transform hover:scale-110 ${
                                image === selectedImage ? "" : ""
                              }`}
                              onClick={() => handleDesignChange(image)}
                            >
                              <div className="flex items-center justify-center">
                                <img
                                  src={image}
                                  alt={`Image ${index}`}
                                  className="w-40 h-40 rounded-lg"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <button
                      className="w-3/4 h-16 rounded-md bg-green-500 hover:text-green-600 hover:bg-transparent border-2 text-white font-bold md:mr-0 mr-2"
                      onClick={() => setShowcard(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="rounded-full bg-white border border-gray-300 px-4 py-2 flex items-center"
                      onClick={openModal}
                    >
                      <img src={logo} alt="Logo" className="w-4 h-4 mr-2" />
                      ChatBot Assistant
                    </button>
                    {isModalOpen && (
                      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70">
                        <div className="relative bg-white w-full max-w-lg p-4 rounded-lg">
                          <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                          <iframe
                            src="https://www.chatbase.co/chatbot-iframe/XtneSGHh7CQIP8Bg--DJ8"
                            width="100%"
                            style={{ height: "100%", minHeight: "700px" }}
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                </main>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Birthday;
