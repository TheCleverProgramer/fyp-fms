import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { FacultyProfile, HomeStudent, HomeFaculty} from "./routes";
import { Navbar } from "./components";
import './config.js';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home/student" element={<HomeStudent />} />
        <Route path="/home/faculty" element={<HomeFaculty />} />
        <Route path="/facultyProfile/:facultyId" element={<FacultyProfile />}/>
    </Routes>  
  </BrowserRouter>
);