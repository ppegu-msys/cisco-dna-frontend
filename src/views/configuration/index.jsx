import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureElement from "src/elements/ConfigureElement";
import InfraProgress from "./InfraProgress";
import InfraStructure from "./InfraStructure";
import OnpremView from "./Onprem";
import "./style.css";

const ConfigureView = () => {
  return (
    <Routes>
      <Route path="/*" element={<ConfigureElement />}>
        <Route index element={<Navigate to="infra-progress" />} />
        <Route path="on-prem" element={<OnpremView />} />
        <Route path="infrastructure" element={<InfraStructure />} />
        <Route path="infra-progress" element={<InfraProgress />} />
      </Route>
    </Routes>
  );
};

export default ConfigureView;
