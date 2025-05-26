import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "Niraj",
  });
  console.log(isAuthenticated);
  const [chat, setChat] = useState({});
  useEffect(() => {
    checkAuthAndGetAllChat();
  }, []);

  const checkAuthAndGetAllChat = async () => {
    setIsAuthenticated("loading");

    try {
      const res = await axios.get(`${BASE_URL}/chat`, {
        withCredentials: true,
      });
      setIsAuthenticated(true);
      setChat(res.data.data);
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    }
  };

  async function login(payLoad) {
    try {
      const res = await axios.post(`${BASE_URL}/login`, payLoad, {
        withCredentials: true,
      });
      setIsAuthenticated(true);
      setUser(res.data.data);
      return Navigate("/");
    } catch (error) {
      console.error("login error :" + error);
    }
  }

  async function signup(payLoad) {
    try {
      const res = await axios.post(`${BASE_URL}/signup`, payLoad, {
        withCredentials: true,
      });
      setIsAuthenticated(true);
      setUser(res.data.data);
      return Navigate("/");
    } catch (error) {
      console.error("login error :" + error);
    }
  }
  async function logout() {
    try {
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(false);
      setUser({});
      return Navigate("/login");
    } catch (error) {
      console.error("login error :" + error);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        signup,
        logout,
        chat,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
