import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/sign-up/SignUp";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
