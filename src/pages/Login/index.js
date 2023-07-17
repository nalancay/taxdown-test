import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ApiUsers from "../../api/users";
import { useFetchList } from "../../hooks/useFetchList";
import {
  Button,
  ErrorMsg,
  Input,
  Label,
  LoginForm,
  Title,
} from "./Login.styles";
import Context from "../../context/UserContext";

const Login = () => {
  const { token, setToken } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState({ hasError: false });
  const { entities: users, isLoading } = useFetchList({
    fetchDataFunction: ApiUsers.getUsers,
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleError = (error) => {
    const defualtMessage = "Credentials are invalid";
    setErrorState({
      hasError: true,
      message: error?.message ?? defualtMessage,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (authenticatedUser) {
        sessionStorage.setItem("token", authenticatedUser.token);
        const tokenSessionStorage = sessionStorage.getItem("token");
        setToken(tokenSessionStorage);
        navigate("/");
      } else {
        handleError();
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      {token && <Navigate to="/" />}
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Label>
          Username
          <Input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </Label>
        <Button type="submit">Login</Button>
      </LoginForm>
      {errorState.hasError && !isLoading && (
        <ErrorMsg>{errorState.message}</ErrorMsg>
      )}
    </>
  );
};

export default Login;
