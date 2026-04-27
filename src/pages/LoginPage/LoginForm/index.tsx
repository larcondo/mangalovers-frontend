import styles from "./index.module.css";
import { useState } from "react";
import useLogin from "@hooks/graphql/useLogin";
import { useNavigate } from "react-router-dom";
import { CombinedGraphQLErrors } from "@apollo/client";
import { useAuth } from "@hooks/useAuth";

import TextInput from "@components/TextInput";
import PasswordInput from "@components/PasswordInput";
import CircleLoader from "@components/CircleLoader";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const { login, loading } = useLogin();
  const navigate = useNavigate();

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      if (data) {
        clearFields();
        navigate("/");
        auth.login(data.login);
      }
    } catch (err) {
      if (CombinedGraphQLErrors.is(err)) {
        alert(err.message);
        console.log(err.errors[0].message, err.errors[0].extensions);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
      <TextInput
        id="login-username"
        label="Usuario*:"
        value={username}
        onChange={handleUsernameChange}
      />

      <PasswordInput
        id="login-password"
        label="Contraseña*:"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit" className={styles.loginButton} disabled={loading}>
        Ingresar
        {loading && <CircleLoader />}
      </button>
    </form>
  );
};

export default LoginForm;
