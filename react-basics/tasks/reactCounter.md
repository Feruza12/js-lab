# Task: Build a Simple "Counter App" App with React

## Goal
In this task, you will build a simple **Counter App** using React. The app will allow users to:
- Increment and decrement a counter.
- Reset the counter to its initial state.
- Start and stop a timer that increments the counter automatically every second.
- Display a message when the counter reaches a specific value (e.g., 10).

You will use the following React concepts:
- `useState` for managing the counter and the timer state.
- `useEffect` to handle side effects like starting and stopping the timer.
- Handling basic user interactions (button clicks) without fetching data from an API.

---

## Task Requirements

1. **Set Up the Counter State:**
   - Initialize the counter with `useState` and set the default value to 0.
   - Display the current counter value on the screen.

2. **Create Buttons for User Interaction:**
   - Add three buttons:
     - **Increment**: Increases the counter by 1.
     - **Decrement**: Decreases the counter by 1.
     - **Reset**: Resets the counter to 0.

3. **Add Conditional UI:**
   - When the counter reaches **10**, display a message saying: `"Counter reached 10!"`.
   - When the counter goes below **0**, prevent it from decreasing further and show a message: `"Counter cannot go below 0"`.

4. **Implement the Timer:**
   - Add a button labeled **Start Timer**. When clicked, this button starts a timer that automatically increments the counter by 1 every second.
   - Change the button label to **Stop Timer** while the timer is running. Clicking it again should stop the timer.
   - The timer should stop automatically when the counter reaches **20**.

5. **Use Effects for Side Effects:**
   - Use `useEffect` to manage the timer's side effect (starting and stopping the timer).
   - Clean up the timer when the component unmounts or when the timer is stopped.