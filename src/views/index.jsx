import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureView from "./configuration";
import LaunchPad from "./launchpad";

const IndexView = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/lauchpad" />} />
      <Route path="configure/*" element={<ConfigureView />} />
      <Route path="lauchpad/*" element={<LaunchPad />} />
    </Routes>
  );
};

export default IndexView;
