import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);
    const googleSignUp = () =>{
        const googleProvider = new GoogleAuthProvider();
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const userLogOut = () =>{
        return signOut(auth)
    }

     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoading(false)
            // if (currentUser) {
             
            // } else {
            //   setUser(null)
            // }
          });
        return unsubscribe
    },[])
    const AuthInfo ={googleSignUp,userLogOut,user,setUser,loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;