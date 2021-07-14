import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, provider } from '../firebase';

const AuthContext = createContext({
  currentUser: null,
  login: (email, password) => {},
  signup: (email, password) => {},
  logout: () => {},
  signInWithGoogle: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const ctx = {
    currentUser,
    signup,
    login,
    logout,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={ctx}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
