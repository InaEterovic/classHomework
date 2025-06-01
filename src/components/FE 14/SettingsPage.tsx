import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("John Doe");

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Settings</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleToggleDarkMode}
          />
          Enable Dark Mode
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleChangeUsername}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <div>
        <strong>Current Settings:</strong>
        <ul>
          <li>Dark Mode: {darkMode ? "Enabled" : "Disabled"}</li>
          <li>Username: {username}</li>
        </ul>
      </div>
    </div>
  );
}
