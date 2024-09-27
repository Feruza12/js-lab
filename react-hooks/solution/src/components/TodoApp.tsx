import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';
import { Button, TextField, Typography, List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoApp: React.FC = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodo();
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTodo(newTask.trim());
            setNewTask('');
        }
    };

    return (
        <div className='todo'>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'Raleway', mt: '80px', mb: "20px" }} variant="h4" className='todo__heading'>TO-DO LIST</Typography>

            <form onSubmit={handleSubmit} className='todo__form'>
                <TextField
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    label="New Task"
                    variant="outlined"
                    fullWidth
                    color="success"
                />
                <Button type="submit" variant="contained" color="success" className='todo__btn'>
                    Add
                </Button>
            </form>

            <List>
                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} id={todo.id} completed={todo.completed} name={todo.name} onRemove={removeTodo} onToggle={toggleTodo} />
                    ))
                }
            </List>

            {todos.length === 0 && <Typography sx={{color: "grey"}} variant="h6">No tasks left!</Typography>}
        </div>
    );
};

export default TodoApp;
