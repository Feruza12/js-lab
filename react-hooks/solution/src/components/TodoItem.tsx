import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItemProps } from '../interfaces/interface';


function TodoItem({ id, name, completed, onToggle, onRemove }: TodoItemProps) {
    return (
        <ListItem sx={{textDecoration: completed ? "line-through" : "none"}}>
            <Checkbox checked={completed} onChange={() => onToggle(id)} />
            <ListItemText primary={name} />
            <IconButton edge="end" onClick={() => onRemove(id)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
