import "./App.css";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
