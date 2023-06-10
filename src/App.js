import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/sign-up/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
