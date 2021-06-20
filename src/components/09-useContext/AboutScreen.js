import React, { useContext } from "react";
import { UserContex } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContex);

  const handleClick = () => {
    setUser({});
  };
  return (
    <div>
      <h1>About Screeen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-warning" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
