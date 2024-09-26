import { FormEvent, useEffect, useState } from "react";
import PlusIcon from "./assets/plus";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  function addTodo(e: FormEvent) {
    e.preventDefault();
    if (!task.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  }

  function toggleCompleted(id: number) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  function handleChange(task: string) {
    setTask(task);
  }

  // could be use provider rather then props drilling
  function deleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    if (todos.length > 0 && todos.every((todo) => todo.completed)) {
      console.log("All todos are completed");
    }
  }, [todos]);

  return (
    <>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold">ToDo App</h1>
            <div className="mt-4 flex">
              <form onSubmit={addTodo} className="flex">
                <Input
                  placeholder="Enter your task"
                  onChange={handleChange}
                  value={task}
                />

                <button
                  type="submit"
                  className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                >
                  <PlusIcon />
                  <span>Add</span>
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8">
            {todos.length === 0 ? (
              <p>No todos</p>
            ) : (
              <ul>
                {todos.map((todo) => (
                  <TodoList
                    id={todo.id}
                    key={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
