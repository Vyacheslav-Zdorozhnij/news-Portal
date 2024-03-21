import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import "./style.css";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("handleChange >>", e.target);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler:MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    console.log("submitHandler >>", formData);

    try {
      const response = await fetch("http://localhost:4001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form
      className="regForm"
      //   action="http://localhost:4001/user/register"
      //   method="POST"
      //   onSubmit={submitHandler}
    >
      <div className="elemForm">
        <h2>Register</h2>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Username"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
        <button className="submit-btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
