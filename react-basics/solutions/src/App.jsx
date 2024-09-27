import ReactCounter from "./components/counter/ReactCounter";
import "./App.css";
import TodoApp from "./components/todoapp/TodoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<ReactCounter />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
