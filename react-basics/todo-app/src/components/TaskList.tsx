import { Task } from "../App";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompleted: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

function TaskList({ tasks, toggleTaskCompleted, removeTask }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
              className="checkbox"
            />
            <span className={task.completed ? "completed" : "incomplete"}>
              {task.name}
            </span>
          </span>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => removeTask(task.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
