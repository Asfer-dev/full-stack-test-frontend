import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";

interface FormData {
  name: string;
  email: string;
  dob: string;
  department: string;
  comments: string;
}

const FormPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    dob: "",
    department: "",
    comments: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace with API call to submit data
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-red-200">Hello</h2>
      <Button>A button</Button>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of Birth:{" "}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Department:
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
        </select>
      </label>
      <label>
        Comments:{" "}
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
