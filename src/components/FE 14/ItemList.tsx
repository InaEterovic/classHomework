import React, { useState, useCallback } from "react";
import AddItemButton from "./AddItemButton";

export default function ItemList() {
  const [items, setItems] = useState<string[]>([]);
  const [count, setCount] = useState(0); // unrelated state

  const addItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  // const addItem = () => {
  //   setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  // };

  return (
    <div>
      <h2>Items:</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <AddItemButton onAdd={addItem} />

      <hr />
      <p>Unrelated Counter: {count}</p>
      <button
        className="p-2 bg-cyan-600 rounded-b-sm"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment Counter
      </button>
    </div>
  );
}
