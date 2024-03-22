import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../../redux/actions/action";
import "./style.css";
const RegisterForm = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.isLoading);
  // const error = useSelector((state) => state.error);
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

  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("submitHandler >>", formData);
    dispatch(registerUserRequest(formData));
  };

  return (
    <form className="regForm">
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
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
    </form>
  );
};
export default RegisterForm;
