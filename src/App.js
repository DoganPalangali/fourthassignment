import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import MyAccount from "./components/MyAccount";

import { useState } from "react";

function App() {
  const [title, titleUpdate] = useState("Header");

  return (
    <>
      <div className="container">
        <AppHeader title={title}></AppHeader>
      </div>
      <body>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<UserInfo />}></Route>
          <Route path="/about" element={<MyAccount />}></Route>
        </Routes>
      </body>
      <footer className="footer">This is your footer.</footer>
    </>
  );
}

export default App;
