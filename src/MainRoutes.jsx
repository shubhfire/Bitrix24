import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";

import Errror from "./components/Errror";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
