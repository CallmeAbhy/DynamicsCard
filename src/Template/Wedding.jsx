import React, { useState } from "react";
import Header from "./Wedding/Header";
import Invitor from "./Wedding/Invitor";
import Time from "./Wedding/Time";
import Notes from "./Wedding/Notes";
import Address from "./Wedding/Address";
import Couple from "./Wedding/Couple";
import image1 from "./Image/Marraige1.jpg";
import image2 from "./Image/Wedding1.jpg";
import image3 from "./Image/Wedding2.jpg";
import image4 from "./Image/Wedding4.png";
import image5 from "./Image/Wedding5.png";
import logo from "./Image/chatgpt.jpg";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import "./Style.css";
import { useEffect, useRef } from "react";
import Nav from "./Wedding/Nav";

const Wedding = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [invitor, setInvitor] = useState("");
  const [invitorDescription, setInvitorDescription] = useState("");
  const [husband, setHusband] = useState("");
  const [husbandDetails, setHusbandDetails] = useState("");
  const [wife, setWife] = useState("");
  const [wifeDetails, setWifeDetails] = useState("");
  const [venue, setVenue] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("");
  const [note, setNote] = useState("");
  const [barrat, setBarrat] = useState("");
  const [lunch, setLunch] = useState("");
  const [date, setDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedBarrat, setFormattedBarrat] = useState("");
  const [formattedLunch, setFormattedLunch] = useState("");
  const [onwards, setOnwards] = useState("");

  const [backgroundImage, setBackgroundImage] = useState(""); // Background image URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontColor, setFontColor] = useState("black");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif"); // Default font family is Arial
  const images = [image1, image2, image3, image4, image5];
  const [selectedImage, setSelectedImage] = useState(images[0]); // Selected background image

  const divRef = useRef(null);

  const handleDownload = () => {
    // Use html2canvas to capture the div content and convert it to an image.
    html2canvas(divRef.current).then((canvas) => {
      // Convert the canvas to a data URL.
      const imgData = canvas.toDataURL("image/png");

      // Use FileSaver.js to save the image as a file.
      saveAs(imgData, "colorful_div.png");
    });
  };

  // for invitor Description
  const maxCharacterCount = 100;

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxCharacterCount) {
      setInvitorDescription(text);
    }
  };
  // for Notes Description
  const maxiCharacters = 180;
  const handleChange2 = (e) => {
    const text = e.target.value;
    if (text.length <= maxiCharacters) {
      setNote(text);
    }
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  const formatDateToWord = (dateString) => {
    if (dateString) {
      const dateObj = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return dateObj.toLocaleDateString("en-US", options);
    }
    return "";
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Format the selected date into a word format
    const formatted = formatDateToWord(selectedDate);
    setFormattedDate(formatted);
  };

  const formateTimetoWord = (timeString) => {
    if (timeString) {
      const [hours, minutes] = timeString.split(":");
      const hour = parseInt(hours, 10);
      const minute = parseInt(minutes, 10);

      const period = hour >= 12 ? "PM" : "AM";

      const formattedhour = hour > 12 ? hour - 12 : hour;
      const formattedMinute = minute.toString().padStart(2, "0");

      return `${formattedhour}:${formattedMinute}  ${period} onwards`;
    }

    return "";
  };

  const handleChangeTime = (e) => {
    const selectedTime = e.target.value;
    setOnwards(selectedTime);
    const formatted = formateTimetoWord(selectedTime);
    setFormattedTime(formatted);
  };
  const handleBarratChange = (e) => {
    const selectedTime = e.target.value;
    setBarrat(selectedTime);
    const formatted = formateTimetoWord(selectedTime);
    setFormattedBarrat(formatted);
  };

  const handleLunchChange = (e) => {
    const selectedTime = e.target.value;
    setLunch(selectedTime);
    const formatted = formateTimetoWord(selectedTime);
    setFormattedLunch(formatted);
  };
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

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <div id="heading">
              <Header
                handlePrint={handlePrint}
                handleDownload={handleDownload}
                handleShare={handleShare}
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
              id="Main"
              className="print:bg-white print:text-black"
            >
              <div class="flex flex-col items-center justify-between ">
                <div class="bg-transparent overflow-ellipsis overflow-hidden rounded-lg w-full max-w-lg p-10">
                  <Invitor
                    invitor={invitor}
                    invitorDescription={invitorDescription}
                  />
                  <Couple
                    husband={husband}
                    husbandDetails={husbandDetails}
                    wife={wife}
                    wifeDetails={wifeDetails}
                  />
                  <Time
                    date={formattedDate}
                    onwards={formattedTime}
                    barrat={formattedBarrat}
                    lunch={formattedLunch}
                  />
                  <Notes notes={note} />
                  <Address venue={venue} area={area} state={state} />
                </div>
              </div>
            </div>
            <div id="buttons">
              <button
                onClick={() => setShowInvoice(false)}
                // className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                className="w-full h-12 rounded-md bg-blue-500 hover:text-blue-600 hover:bg-transparent border-2 text-white font-bold md:mt-8 mt-4"
              >
                Edit Information
              </button>
            </div>
          </div>
        ) : (
          // Card Section Ends
          <section>
            <div className="flex flex-col items-center">
              <Nav />
              <div className="text-center py-4 md:py-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600">
                  💒 Plan Your Dream Wedding 🎩👰
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                  Start preparing for your special day and create lasting
                  memories.
                </p>
              </div>
            </div>
            <div>
              <main>
                <div className="flex flex-col justify-center">
                  <label htmlFor="invitor" className="text-lg font-bold">
                    Enter Invitor Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="invitor"
                    placeholder="Dhanshree and Anil Verma"
                    autoComplete="off"
                    value={invitor}
                    className="resize-none border rounded-md"
                    onChange={(e) => setInvitor(e.target.value)}
                  />

                  <label
                    htmlFor="invitorDetails"
                    className=" text-lg font-bold md:mt-10 mt-5"
                  >
                    Enter Invitor Details
                  </label>
                  <div className="flex items-center justify-between">
                    <textarea
                      type="text"
                      name="text"
                      cols="30"
                      rows="3"
                      id="invitorDetails"
                      placeholder="Would be Honoured to have the presence of at the auspicious occasion of the wedding of their son"
                      autoComplete="off"
                      value={invitorDescription}
                      // onChange={(e) => setInvitorDescription(e.target.value)}
                      onChange={handleChange}
                      className="rounded w-full"
                    />
                  </div>
                  <p className="text-lg font-bold text-teal-500">
                    Character Count: {invitorDescription.length}/
                    {maxCharacterCount}
                  </p>

                  <article className="md:grid grid-cols-2 gap-10 md:my-5 my-5">
                    <div className="flex flex-col">
                      <label htmlFor="Husband" className="text-lg font-bold">
                        Enter Hunband Full Name
                      </label>
                      <input
                        type="text"
                        name="text"
                        id="Husband"
                        placeholder="Aditya Krishna Roy"
                        autoComplete="off"
                        value={husband}
                        onChange={(e) => setHusband(e.target.value)}
                        className="resize-none border rounded-md p-2"
                      />
                    </div>
                    <div className="flex flex-col md:mt-0 mt-4">
                      <label htmlFor="wife" className="text-lg font-bold">
                        Enter Wife Full Name
                      </label>
                      <input
                        type="text"
                        name="text"
                        id="wife"
                        placeholder="Soumya Jay Shrivastav"
                        autoComplete="off"
                        value={wife}
                        onChange={(e) => setWife(e.target.value)}
                        className="resize-none border rounded-md p-2"
                      />
                    </div>
                  </article>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-10">
                    <div className="flex flex-col">
                      <label
                        htmlFor="HusbandDetails"
                        className="text-lg font-bold"
                      >
                        Enter Husband Details
                      </label>
                      <textarea
                        name="text"
                        id="HusbandDetails"
                        placeholder="B.Tech IIT Powai, Son of Anil Rajesh Verma"
                        autoComplete="off"
                        value={husbandDetails}
                        onChange={(e) => setHusbandDetails(e.target.value)}
                        className="resize-none border rounded-md p-2"
                        rows="3" // Define the number of rows
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="WifeDetails"
                        className="text-lg font-bold"
                      >
                        Enter Wife Details
                      </label>
                      <textarea
                        name="text"
                        id="WifeDetails"
                        placeholder="MBBS BJMC Pune, Daughter of Jay Uday Parihar"
                        autoComplete="off"
                        value={wifeDetails}
                        onChange={(e) => setWifeDetails(e.target.value)}
                        className="resize-none border rounded-md p-2"
                        rows="3" // Define the number of rows
                      />
                    </div>
                  </div>

                  <article className="md:grid grid-cols-3 gap-10 md:my-5 my-5">
                    <div className="flex flex-col md:mt-0 mt-4">
                      <label htmlFor="venue" className="text-lg font-bold">
                        Enter Venue
                      </label>
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
                    <div className="flex flex-col md:mt-0 mt-4">
                      <label htmlFor="area" className="text-lg font-bold">
                        Enter City
                      </label>
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
                    <div className="flex flex-col md:mt-0 mt-4">
                      <label htmlFor="state" className="text-lg font-bold">
                        Enter State
                      </label>
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

                  <label
                    htmlFor="Notes"
                    className="md:mt-10 mt-5 text-lg font-bold"
                  >
                    Enter Notes for guest
                  </label>
                  <textarea
                    type="text"
                    name="text"
                    id="notes"
                    cols="30"
                    rows="4"
                    placeholder="We are writing to you today to seek your blessing for our upcoming marriage. You have been a special person in our lives for many years, and we value your wisdom and guidance"
                    autoComplete="off"
                    value={note}
                    onChange={handleChange2}
                  />
                  <p className="text-lg font-bold text-teal-500">
                    Character Count: {note.length}/{maxiCharacters}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:my-5 my-5">
                    <div className="flex flex-col border p-4 rounded-md">
                      <label htmlFor="date" className="text-lg font-bold mb-2">
                        Enter the Date of Marriage
                      </label>
                      <input
                        type="date"
                        name="text"
                        id="date"
                        placeholder="6 October 2023"
                        autoComplete="off"
                        value={date}
                        onChange={handleDateChange}
                        className="border rounded-md p-2 "
                      />
                    </div>

                    <div className="flex flex-col border p-4 rounded-md ">
                      <label htmlFor="time" className="text-lg font-bold mb-2">
                        Enter the Time of Marriage
                      </label>
                      <input
                        type="time"
                        name="text"
                        id="time"
                        placeholder="2 pm onwards"
                        autoComplete="off"
                        value={onwards}
                        onChange={handleChangeTime}
                        className="border rounded-md p-2 "
                      />
                    </div>

                    <div className="flex flex-col border p-4 rounded-md">
                      <label
                        htmlFor="barrat"
                        className="text-lg font-bold mb-2"
                      >
                        Enter the Time of Barrat
                      </label>
                      <input
                        type="time"
                        name="text"
                        id="barrat"
                        placeholder="e.g., 9:00"
                        autoComplete="off"
                        value={barrat}
                        onChange={handleBarratChange}
                        className="border rounded-md p-2 "
                      />
                    </div>

                    <div className="flex flex-col border p-4 rounded-md">
                      <label
                        htmlFor="lunch"
                        className="text-lg  font-bold mb-2"
                      >
                        Enter the Time of Lunch
                      </label>
                      <input
                        type="time"
                        name="text"
                        id="lunch"
                        placeholder="e.g., 1:00"
                        autoComplete="off"
                        value={lunch}
                        onChange={handleLunchChange}
                        className="border rounded-md p-2 "
                      />
                    </div>
                  </div>

                  <div className="md:my-5 my-5">
                    <div className="flex flex-col md:my-05">
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

                    <div className="flex flex-col">
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
                  </div>
                  <p
                    className="text-lg font-bold"
                    style={{ color: fontColor, fontFamily: fontFamily }}
                  >
                    This is Sample Text
                  </p>

                  <div className="border-4 p-4 rounded-md md:my-5 my-5">
                    <label className="text-lg font-bold">
                      Enter background you want to select from given design
                    </label>
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
                      className="w-3/4 h-16 rounded-md bg-blue-500 text-white font-bold md:mr-0 mr-2"
                      onClick={() => setShowInvoice(true)}
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
                </div>
              </main>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Wedding;
