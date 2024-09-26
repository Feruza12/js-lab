import XIcon from "../assets/x";

function DeleteTodo(props: { id: number; deleteTodo: (id: number) => void }) {
  const { id, deleteTodo } = props;

  return (
    <button
      onClick={() => deleteTodo(id)}
      className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
    >
      <XIcon />
      <span>Remove</span>
    </button>
  );
}

export default DeleteTodo;
