import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import ReqAuth from "../privateRoute/ReqAuth";
import Editpage from "../pages/Editpage";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/:id" element={<Editpage />} />
      <Route
        path="/dashboard"
        element={
          <ReqAuth>
            <Dashboard />
          </ReqAuth>
        }
      />
    </Routes>
  );
};

export default AllRoute;
