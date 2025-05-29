import React from "react";

interface LiftStateChildProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const LiftStateChild: React.FC<LiftStateChildProps> = ({
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="p-4 border rounded shadow-md w-40 text-center m-2">
      <h2 className="text-xl font-semibold">{value}</h2>
      <div className="mt-2 space-x-2">
        <button
          onClick={onDecrement}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default LiftStateChild;
