import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsFeed from "./components/NewsFeed";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<NewsFeed />} />
        <Route path="admin/*" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
