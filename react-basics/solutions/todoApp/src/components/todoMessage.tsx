export function TodoMessage({ message }: { message: string }) {
  return (
    <div className="mb-3">
      <p>{message}</p>
    </div>
  );
}
