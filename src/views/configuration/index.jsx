import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureElement from "src/elements/ConfigureElement";
import DNACenter from "./DNACenter";
import InfraProgress from "./InfraProgress";
import InfraStructure from "./InfraStructure";
import InProgress from "./InProgress";
import OnpremView from "./Onprem";
import "./style.css";

const ConfigureView = () => {
  return (
    <div className="container-fluid mt-4">
      <Routes>
        <Route path="/*" element={<ConfigureElement />}>
          <Route index element={<Navigate to="in-progress" />} />
          <Route path="on-prem" element={<OnpremView />} />
          <Route path="infrastructure" element={<InfraStructure />} />
          <Route path="infra-progress" element={<InfraProgress />} />
          <Route path="dna-center" element={<DNACenter />} />
          <Route path="in-progress" element={<InProgress />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ConfigureView;
