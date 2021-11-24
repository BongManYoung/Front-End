import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as pages from "Pages";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<pages.MainPage />} />
        <Route path="/login" element={<pages.LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
