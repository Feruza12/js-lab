export function TodoMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-center mb-3">
      <p>{message}</p>
    </div>
  );
}
