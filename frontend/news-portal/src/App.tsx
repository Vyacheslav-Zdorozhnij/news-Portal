import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/userRegistration/registerForm";
import LoginForm from "./Components/userLogin/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegisterForm/>} />
        <Route path="login" element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
