import logo from "./logo.svg";
import Navbar from "./Components/landingPage";
import Home from "./Pages/home";
import Men from "./Pages/men";
import Book from "./Pages/Book";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import yourImageURL from "./Assets/bg.jpg";
const Styles = {
  background: {
    backgroundImage: `url(${yourImageURL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  },
};
function App() {
  return (
    <div className="App" style={Styles.background}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* main page */}
          <Route
            path="/"
            exact
            element={
              <>
                {/* <Home /> */}
                <Book />
              </>
            }
          />

          <Route
            path="/about"
            exact
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            exact
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/Men"
            exact
            element={
              <>
                <Men />
              </>
            }
          />
          <Route
            path="/books"
            exact
            element={
              <>
                <Book />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
