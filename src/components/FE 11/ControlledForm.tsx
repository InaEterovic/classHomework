import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    newsletter: false,
    favoriteColor: "#000000",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3xl mx-auto p-6 bg-white text-black rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Controlled Form</h2>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
        />
        <label className="text-sm">Subscribe to newsletter</label>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Favorite Color</label>
        <input
          type="color"
          name="favoriteColor"
          value={formData.favoriteColor}
          onChange={handleChange}
          className="w-16 h-10 p-0 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
