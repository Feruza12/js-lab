# Task: Build a Simple "To-Do List" App with React

## Goal
In this task, you will build a **To-Do List** app using React. The app will allow users to:
- Add new tasks.
- Mark tasks as complete or incomplete.
- Remove tasks from the list.
- View a message when all tasks are completed or when the list is empty.

You will practice using:
- `useState` for managing the list of tasks and their status.
- `useEffect` to handle side effects such as displaying messages based on the task list.
- Basic user interactions, like adding, completing, and deleting tasks.

---

## Task Requirements

1. **Set Up the To-Do List State:**
   - Use `useState` to manage a list of tasks. Each task should have:
     - A `name` (string).
     - A `completed` status (boolean).
   - Initialize the state with an empty array (i.e., no tasks).

2. **Add New Tasks:**
   - Create a form with an input field and a submit button to add a new task.
   - When the form is submitted, add the task to the task list.
   - Clear the input field after adding a task.

3. **Display the Task List:**
   - Render the list of tasks in the UI.
   - Each task should display:
     - The task name.
     - A checkbox that toggles the task’s completed status.
     - A "Remove" button to delete the task from the list.

4. **Handle Task Completion:**
   - Clicking the checkbox next to a task should toggle its `completed` state (true or false).
   - Visually differentiate completed tasks (e.g., strike-through the text or change its style).

5. **Remove Tasks:**
   - Clicking the "Remove" button should delete the task from the list.

6. **Conditional UI:**
   - When there are no tasks in the list, display a message: `"No tasks left!"`.
   - When all tasks are completed, display a message: `"All tasks completed!"`.
