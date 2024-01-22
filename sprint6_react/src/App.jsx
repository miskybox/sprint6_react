//App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckBox from "./components/CheckBox";
import "./App.css";
import Welcome from "./components/Welcome";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="checkbox" element={<CheckBox />} />
        </Routes>
    );
}