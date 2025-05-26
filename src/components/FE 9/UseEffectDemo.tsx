import { useState, useEffect } from "react";

const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];

export const UseEffectDemo = () => {
  const [category, setCategory] = useState("Programming");
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async (cat: string) => {
    setLoading(true);
    try {
      const res = await fetch(`https://v2.jokeapi.dev/joke/${cat}?type=single`);
      const data = await res.json();
      setJoke(data.joke || "No joke found.");
    } catch {
      setJoke("Failed to fetch joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(category);
  }, [category]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-400 rounded-2xl shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Joke by Category</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 p-2 border rounded-md "
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="text-black">
            {cat}
          </option>
        ))}
      </select>

      {loading ? (
        <p className="italic">Loading joke...</p>
      ) : (
        <p className="text-lg mb-4">{joke}</p>
      )}
    </div>
  );
};
