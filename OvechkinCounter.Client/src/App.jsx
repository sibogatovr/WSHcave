import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import AdminPanel from "./pages/AdminPanel";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<NewsFeed />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="admin/*" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
