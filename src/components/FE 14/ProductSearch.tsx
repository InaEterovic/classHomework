import { useState, useMemo } from "react";

const products = ["Apple", "Banana", "Carrot", "Orange", "Mango", "Avocado"];

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filtered = useMemo(() => {
    console.log(" Filtering...");
    return products.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // const filtered = products.filter((item) => {
  //   console.log("re-calculate");
  //   return item.toLowerCase().includes(query.toLowerCase());
  // });

  return (
    <div>
      <h2>Product Search</h2>
      <input
        placeholder="Search"
        className="border-2 border-teal-500 h-8 mr-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        className="p-2 rounded-sm bg-teal-500"
        onClick={() => setCount((c) => c + 1)}
      >
        Re-render: {count}
      </button>

      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
