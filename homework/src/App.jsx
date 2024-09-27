// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Counter from "./counter";
import ToDo from "./ToDo";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      Hello to the project
      <Counter />
      <ToDo />
    </>
  );
}

export default App;
