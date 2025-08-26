import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/LandingPage/Hero/Hero";
import Navbar from "./Components/Navbar";
import Problem from "./Components/LandingPage/Problem";
import Rješenje from "./Components/LandingPage/Rješenje";
import Cjenik from "./Components/LandingPage/Cjenik";
import Trust from "./Components/LandingPage/Trust";
import FAQ from "./Components/LandingPage/FAQ";
import Footer from "./Components/LandingPage/Footer";

const App = () => {
  return (
    <div
      className="h-full antialiased bg-slate-950 text-slate-200"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Problem />
              <Rješenje />
              <Trust />
              <Cjenik />
              <FAQ />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
