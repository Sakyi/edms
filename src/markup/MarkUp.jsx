import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";

const MarkUp = () => {
  return (
    <Router basename="/">
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      {/* <ScrollToTop /> */}
    </Router>
  );
};

export default MarkUp;
