import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock login function
  function login(email, password) {
    // Implement actual login logic here
    console.log("Login", email, password);
    setCurrentUser({ email });
  }

  // Mock logout function
  function logout() {
    setCurrentUser(null);
  }

  useEffect(() => {
    // Check for stored user or token here
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
