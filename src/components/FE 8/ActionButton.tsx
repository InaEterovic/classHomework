type ActionButtonProps = {
  label: string;
  onAction: () => void;
};

export function ActionButton({ label, onAction }: ActionButtonProps) {
  return (
    <button
      onClick={onAction}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
}
