import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import JoinPage from "./Pages/JoinPage";
import ReviewPage from "Pages/ReviewPage";
import OrderPage from "Pages/OrderPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store/:id" element={<ReviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
