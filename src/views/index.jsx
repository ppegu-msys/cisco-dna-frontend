import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthView from "./auth";
import ConfigureView from "./configuration";
import LaunchPad from "./launchpad";

const IndexView = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="configure/*" element={<ConfigureView />} />
      <Route path="lauchpad/*" element={<LaunchPad />} />
      <Route path="auth/*" element={<AuthView />} />
    </Routes>
  );
};

export default IndexView;
