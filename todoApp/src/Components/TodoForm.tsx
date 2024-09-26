import { ChangeEvent, FormEvent } from "react";
import "./main.css";

// Define the props for TodoForm
interface TodoFormProps {
    addTodo: () => void;
    inputValue: string;
    setInputValue: (value: string) => void;
    category: string;
    setCategory: (category: string) => void;
}

export default function TodoForm({
                                     addTodo,
                                     inputValue,
                                     setInputValue,
                                     category,
                                     setCategory,
                                 }: TodoFormProps) {
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (inputValue !== "") {
            addTodo();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create a todo</h2>
                <p className="sub-title">What's on your todo list?</p>

                <label className="input__activity">
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter activity..."
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInputValue(e.target.value)
                        }
                    />
                </label>

                <div className="todo__category">
                    <p className="sub-title">Pick a category</p>
                    <div className="radio-btn__wrapper">
                        <label className="radio-btn">
                            <input
                                className="radio-category radio"
                                type="radio"
                                name="category"
                                checked={category === "business"}
                                onChange={() => setCategory("business")}
                            />
                            <span className="business radio"></span>
                            <p>Business</p>
                        </label>
                        <label className="radio-btn">
                            <input
                                className="radio-category radio"
                                type="radio"
                                name="category"
                                checked={category === "personal"}
                                onChange={() => setCategory("personal")}
                            />
                            <span className="personal radio"></span>
                            <p>Personal</p>
                        </label>
                    </div>
                </div>
                <button className="add-todo__btn" onClick={addTodo}>
                    Add todo
                </button>
            </form>
        </div>
    );
}
