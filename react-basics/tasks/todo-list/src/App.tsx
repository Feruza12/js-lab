// src/App.tsx

import React from "react";
import TodoList from "./TodoList";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <TodoList />
    </div>
  );
};

export default App;
