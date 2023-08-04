import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Footer from "./Pages/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
