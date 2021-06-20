import React, { useContext } from "react";
import { UserContex } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContex);

  console.log(user);
  return (
    <div>
      <h1>Home Screeen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
