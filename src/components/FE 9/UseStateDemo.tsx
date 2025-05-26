import { useState, type FC } from "react";

export const UseStateDemo: FC = () => {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          First name:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={form.firstName}
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Last name:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={form.lastName}
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email:
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </div>

      <p className="text-gray-900 dark:text-white">
        {form.firstName} {form.lastName} (
        <span className="italic">{form.email}</span>)
      </p>
    </div>
  );
};
