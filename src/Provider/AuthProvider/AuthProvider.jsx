import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);

  // Email/PassWord Sign In system
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // User Log In
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign Up system
  const googleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const loggedUser = currentUser?.email || user.email;
      if (currentUser) {
        const user = { email: loggedUser };
        axiosPublic.post("/jwt", user).then((res) => console.log(res.data));
      } else {
        axiosPublic.post("/logout").then((res) => console.log(res.data));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const AuthInfo = {
    googleSignUp,
    userLogOut,
    createUser,
    user,
    setUser,
    loading,
    setLoading,
    updateUser,
    userLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
