import { UseTodoReturn } from "../../types";
import { Button } from "@mui/material";
import styles from "./CreateTaskForm.module.css";

export function CreateTaskForm({
    addTask
}: Pick<UseTodoReturn, "addTask">) {
    return (
        <form onSubmit={addTask} className={styles["task-form"]}>
            <input
                type="text"
                name="task-name"
                className={styles["task-input"]}
                placeholder="Task Name"
            />
            <Button
                variant="contained"
                type="submit"
                style={{
                    marginLeft: "8px",
                    marginBottom: "5px",
                    height: "40px"
                }}
            >
                Add Task
            </Button>
        </form>
    );
}
