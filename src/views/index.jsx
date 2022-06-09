import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureView from "./configuration";

const IndexView = () => {
  return (
    <div className="container-fluid mt-4">
      <Routes>
        <Route path="/" element={<Navigate to="/configure" />} />
        <Route path="configure/*" element={<ConfigureView />} />
      </Routes>
    </div>
  );
};

export default IndexView;
