import {useTodo} from "../../hooks/useTodo.ts";
import TodoForm from "../TodoForm/TodoForm.tsx";
import TodoCreate from "../TodoCreate/TodoCreate.tsx";
import "./TodoItem.css"

export default function TodoItem() {
    const {
        todos,
        inputValue,
        setInputValue,
        category,
        setCategory,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo,
    } = useTodo();

    return (
        <div className="todo">
        <div className="todo__container">
            <h1>
                Whats up,
        <input
            className="todo__input"
    type="text"
    placeholder="name here..."
        />
        </h1>

        <TodoForm
    addTodo={addTodo}
    inputValue={inputValue}
    setInputValue={setInputValue}
    category={category}
    setCategory={setCategory}
    />
    </div>

    <TodoCreate
    todos={todos}
    setInputValue={setInputValue}
    deleteTodo={deleteTodo}
    completeTodo={completeTodo}
    editTodo={editTodo}
    />
    </div>
);
}
