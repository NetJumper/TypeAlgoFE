// src/contexts/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const amplifyUser = await Amplify.Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
    } catch (error) {
      setUser(null);
    }
  };

  const signOut = async () => {
    try {
      await Amplify.Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
