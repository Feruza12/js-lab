import { useEffect, useState } from 'react';
import bin from '../../assets/bin.svg';

function TodoApp() {
    const [name, setName] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() !== null && name.trim() !== "") {
            setTasks(prev => [...prev, {
                id: Date.now(),
                name,
                completed: false
            }]);
            setName("");
        }
    }

    function taskCompletion(taskId) {
        setTasks(prev =>
            prev.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(prev => prev.filter(task => task.id !== taskId));
    }

    return (
        <div className='todo'>
            <form action="" className='taskInput'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="taskInput" placeholder='Write task title' />
                <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            <div>
                {
                    tasks.length > 0 ?
                        tasks.map(task => (
                            <div key={task.id} className={`task__list ${task.completed ? "completed" : ""}`}>
                                <div className='task__name'>
                                    <input type="checkbox" onChange={() => taskCompletion(task.id)} name="task" id={`task-${task.id}`} />
                                    <label htmlFor={`task-${task.id}`} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                        {task.name}
                                    </label>
                                </div>
                                <button className='bin_btn' onClick={() => handleDeleteTask(task.id)}><img src={bin} alt="bin" className='bin' /></button>
                            </div>
                        ))
                    :
                        <p>No tasks left!</p>
                }
            </div>
        </div>
    )
}

export default TodoApp