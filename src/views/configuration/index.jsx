import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureElement from "src/elements/ConfigureElement";
import OnpremView from "./Onprem";

const ConfigureView = () => {
  return (
    <Routes>
      <Route path="/*" element={<ConfigureElement />}>
        <Route index element={<Navigate to="on-prem" />} />
        <Route path="on-prem" element={<OnpremView />} />
      </Route>
    </Routes>
  );
};

export default ConfigureView;
