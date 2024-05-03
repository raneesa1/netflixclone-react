import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/fireBase";
import {doc,setDoc} from 'firebase/firestore'
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db,'users',email),{
      favShows : []
    },[])
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function sessionOut() {
    return signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ user, signUp, logIn, sessionOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
