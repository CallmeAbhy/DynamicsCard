import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Care from "./views/Care";
import Footer from "./views/Footer";
import Hero from "./views/Hero";
import Products from "./views/Products";
import Reference from "./views/Reference";
import Services from "./views/Services";
import Wedding from "./Template/Wedding";
import Birthday from "./Template/Birthday/Birthday";
import Business from "./Template/Business/Business";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/business" element={<Business />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Products />
              <Reference />
              <Care />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
