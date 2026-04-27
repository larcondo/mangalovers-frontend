import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1 className="text-center-aligned">Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
