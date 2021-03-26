import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();
export const UserConsumer = UserContext.Consumer;

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, history) => {
    try {
      // /api/auth/sign_up
      let res = await axios.post(`/api/auth/sign_up`, user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      alert("error in registering");
    }
  };
  const handleLogin = async (user, history) => {
    try {
      let res = await axios.post("/api/auth/sign_sign", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      alert("error logging in");
    }
  };
  const handleLogout = async (history) => {
    try {
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      alert("error logging out");
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin: handleLogin,
        handleRegister: handleLogin,
        handleLogout: handleLogout,
        handleRegister: handleRegister,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
