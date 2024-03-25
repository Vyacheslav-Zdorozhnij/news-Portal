import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../redux/actions/action";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_USER,
      payload: {
        formData,
      },
    });
  };
  return (
    <form className="loginForma">
      Login Form
      <div className="login__block">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button onClick={submitHandler}>login</button>
      </div>
    </form>
  );
};
export default LoginForm;
