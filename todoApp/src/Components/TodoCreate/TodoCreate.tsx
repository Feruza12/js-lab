import "./TodoCreate.css";
import TodoList from "../TodoList/TodoList.tsx";

// Define the props for TodoCreate
interface Todo {
    id: string;
    todo: string;
    category: string;
    done: boolean;
    editable: boolean;
}

interface TodoCreateProps {
    todos: Todo[];
    setInputValue: (value: string) => void;
    deleteTodo: (id: string) => void;
    completeTodo: (id: string) => void;
    editTodo: (id: string, text: string) => void;
}

export default function TodoCreate({
                                       todos,
                                       setInputValue,
                                       deleteTodo,
                                       completeTodo,
                                       editTodo,
                                   }: TodoCreateProps) {
    return (
        <ul id="todo-list">
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
