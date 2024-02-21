import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Login from "../Screens/Login";
import Signup from "../Screens/Registeruser";
import Navbar from "./Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
