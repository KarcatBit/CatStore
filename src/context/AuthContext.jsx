import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Asignamos roles según el username
  const loginUser = ({ token, username }) => {
    let roles = [];

    if (username === "admin") {
      roles = ["ROLE_ADMIN"];
    } else if (username === "vendedor") {
      roles = ["ROLE_VENDEDOR"];
    } else {
      roles = ["ROLE_CLIENTE"];
    }

    const userData = { username, roles };

    setUser(userData);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loginUser,
        logoutUser,
        isAdmin: user?.roles?.includes("ROLE_ADMIN"),
        isVendedor: user?.roles?.includes("ROLE_VENDEDOR"),
        isCliente: user?.roles?.includes("ROLE_CLIENTE"),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);