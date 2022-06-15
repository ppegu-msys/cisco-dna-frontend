import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./styles.css";

const AuthView = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  );
};

export default AuthView;
