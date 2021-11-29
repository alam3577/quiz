import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Question from "./screens/Question";
function Routers() {
  return (
    <div>
      <Routes>
        <Route strict exact={true} path="/home" element={<Home />} />
        <Route strict exact={true} path="/" element={<Login />} />
        <Route strict exact={true} path="/home/:lang" element={<Question />} />
      </Routes>
    </div>
  );
}

export default Routers;
