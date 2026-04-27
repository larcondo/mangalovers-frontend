import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
