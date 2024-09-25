// src/App.tsx

import React from "react";
import Counter from "./Counter";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="flex justify-center">Nizomiddin Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
