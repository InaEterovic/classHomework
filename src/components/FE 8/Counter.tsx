import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-xs mx-auto text-center border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <p className="text-xl mb-4">{count}</p>
      <button
        onClick={increment}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Increment
      </button>
    </div>
  );
}
