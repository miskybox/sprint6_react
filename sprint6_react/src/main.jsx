//main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckBox from "./components/CheckBox";
import Welcome from "./components/Welcome";
import './styles/App.css';

const BOXES = [
  { title: "SEO", price: 300 },
  { title: "Ads", price: 400 },
  { title: "Web", price: 500 }
];

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="checkbox" element={<CheckBox boxes={BOXES} />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
