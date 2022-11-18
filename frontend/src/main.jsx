import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Profil from "./pages/Profil";
import Users from "./pages/Users";
import Newsfeed from "./pages/Newsfeed";
import css from "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Newsfeed />} />
        
        <Route path="/profil" element={<Profil />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Newsfeed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
