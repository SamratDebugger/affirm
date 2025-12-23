import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AffirmContext = createContext();
export default function MyContext({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
    return () => observer();
  }, []);
  const data = { user };
  return <AffirmContext value={data}>{children}</AffirmContext>;
}
