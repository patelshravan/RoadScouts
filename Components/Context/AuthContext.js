import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const Login = () => {
    setUserToken("asdfg");
    setIsLoading(false);
  };
  const LogOut = () => {
    setUserToken(null);
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider value={{ Login, LogOut, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
