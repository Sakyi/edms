import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Event from "./pages/Events";
import EventDetails from "./pages/EventDetails";

const MarkUp = () => {
  return (
    <Router basename="/">
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/eventdetails" element={<EventDetails />} />
        </Routes>
      </div>
      {/* <ScrollToTop /> */}
    </Router>
  );
};

export default MarkUp;
