import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <div
      className="cursor-pointer login-button"
      onClick={() => logout({ returnTo: `${window.location.origin}/nooblog` })}
    >
      LOGOUT
    </div>
  ) : (
    <div
      className="cursor-pointer login-button"
      onClick={() => loginWithRedirect()}
    >
      LOGIN
    </div>
  );
};

export default LoginButton;
