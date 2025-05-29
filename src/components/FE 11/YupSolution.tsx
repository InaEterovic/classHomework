import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .max(200, "Message cannot exceed 200 characters")
    .required(),
});

type ContactFormData = yup.InferType<typeof schema>;

const ContactFormWithYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
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

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
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

      {/* Message Field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 text-sm font-medium">
          Message (optional)
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className={`border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.message
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactFormWithYup;
