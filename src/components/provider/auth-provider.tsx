import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { auth } from "../../utils/firabase";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};