import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<NewsFeed />} />
      </Routes>
    </Router>
  );
}

export default App;
