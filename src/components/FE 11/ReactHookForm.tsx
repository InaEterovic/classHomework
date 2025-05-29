import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
      gender: "",
      newsletter: false,
      favoriteColor: "#000000",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2xl text-black mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">React Hook Form</h2>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className={`border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.name
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
          type="text"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className={`border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Age</label>
        <input
          {...register("age", {
            valueAsNumber: true,
            min: { value: 0, message: "Age cannot be negative" },
            max: { value: 120, message: "Age seems too high" },
          })}
          className={`border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.age
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
          type="number"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Gender</label>
        <select
          {...register("gender", { required: "Gender is required" })}
          className={`border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.gender
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        >
          <option value="">Select...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          {...register("newsletter")}
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
          id="newsletter"
        />
        <label htmlFor="newsletter" className="text-sm">
          Subscribe to newsletter
        </label>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Favorite Color</label>
        <input
          {...register("favoriteColor")}
          type="color"
          className="w-16 h-10 p-0 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
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

export default ReactHookForm;
