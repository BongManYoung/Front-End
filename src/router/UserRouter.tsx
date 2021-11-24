import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
