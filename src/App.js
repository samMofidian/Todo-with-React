import TodoApp from "./components/TodoApp";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route index="/" element={<TodoApp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
