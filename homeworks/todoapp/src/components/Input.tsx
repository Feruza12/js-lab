function Input(props: {
  value: string;
  placeholder: string;
  onChange: (task: string) => void;
}) {
  const { value, placeholder, onChange } = props;

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-80 border-b-2 border-gray-500 text-black"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
