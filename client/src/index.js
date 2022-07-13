import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { FacultyProfile } from "./routes";
import { Navbar } from "./components";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/facultyProfile/:facultyId" element={<FacultyProfile />}/>
    </Routes>  
  </BrowserRouter>
);