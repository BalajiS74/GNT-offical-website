import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import GetinTouch from "./components/GetinTouch";
import ApplyJob from "./components/ApplyJob";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="GetinTouch" element={<GetinTouch />} />
          <Route path="ApplyJob" element={<ApplyJob />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
