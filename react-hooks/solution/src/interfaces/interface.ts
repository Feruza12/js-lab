export interface Todo {
    id: string;
    name: string;
    completed: boolean;
}

export interface TodoItemProps {
    id: string;
    name: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
}