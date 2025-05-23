import { useRef, useState } from "react";

export const ControlForm = () => {
  const [username, setEmail] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const password = passwordRef.current?.value;
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label>Username (Controlled):</label>
          <input
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label>Password (Uncontrolled):</label>
          <input
            type="password"
            ref={passwordRef}
            className="border p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};
