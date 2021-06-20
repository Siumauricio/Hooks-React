import React, { useContext } from "react";
import { UserContex } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContex);
  return (
    <div>
      <h1>Login Screeen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: 123, name: "Mauricio" });
        }}
      >
        Login
      </button>
    </div>
  );
};
