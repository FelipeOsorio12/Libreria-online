import { type User, users } from "../muck-users/user-mock.data";
import { createContext, useState, type PropsWithChildren } from "react";

interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string): boolean => {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      console.log("Credenciales incorrectas");
      setUser(null);
      return false;
    }

    setUser(user);
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setUser(null);
  };

  return (
    <AuthContext
      value={{
        currentUser: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext>
  );
};
