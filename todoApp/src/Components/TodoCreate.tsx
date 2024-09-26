import "./main.css";
import TodoList from "./TodoList";

// Define the props for TodoCreate
interface Todo {
    id: number;
    todo: string;
    category: string;
    done: boolean;
    editable: boolean;
}

interface TodoCreateProps {
    todos: Todo[];
    setInputValue: (value: string) => void;
    deleteTodo: (id: number) => void;
    completeTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
}

export default function TodoCreate({
                                       todos,
                                       setInputValue,
                                       deleteTodo,
                                       completeTodo,
                                       editTodo,
                                   }: TodoCreateProps) {
    return (
        <ul id="todo-list" className="list">
            <p className="l1">Todo List:</p>
            {todos.map((todo) => (
                <TodoList
                    key={todo.id}
                    todos={todo}
                    setInputValue={setInputValue}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
}
