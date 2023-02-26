import TodoApp from "./components/TodoApp";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index="/" element={<TodoApp />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
