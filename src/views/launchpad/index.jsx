import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LaunchPadHome from "./Home";
import RcaScreen from "./RcaScreen";
import "./styles.css";

const LaunchPad = () => {
  return (
    <div className="col-12">
      <nav className="navbar navbar-light bg-light shadow p-4">
        <div className="col-12">
          <div className="row justify-content-around">
            <div className="col-md-4 ml-3">Cisco DNA Center</div>
            <div className="col-md-4">VA Launch Pad Home</div>
            <div className="col-md-3"> </div>
          </div>
        </div>
      </nav>
      <div className="p-2">
        <Routes>
          <Route index element={<Navigate to="rca" />} />
          <Route path="/home" element={<LaunchPadHome />} />
          <Route path="/rca" element={<RcaScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default LaunchPad;
