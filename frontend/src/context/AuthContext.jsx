import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [userPicture, setUserPicture] = useState(localStorage.getItem('userPicture') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);
  

  const login = (token, name, picture) => {
    setToken(token);
    setUserName(name);
    setUserPicture(picture);
    localStorage.setItem('userName', name);
    localStorage.setItem('userPicture', picture);
  };

  const logout = () => {
    setToken('');
    setUserName('');
    setUserPicture('');
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ token, userName, userPicture, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);