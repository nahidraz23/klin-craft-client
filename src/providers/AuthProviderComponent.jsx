import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviderComponent = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadedItem, setloadedItem] = useState([]);

    useEffect(() => {
        fetch('http://kiln-craft-server.vercel.app/items')
        .then(res => res.json())
        .then(data => {
            setloadedItem(data)
        })
    },[])

    //Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign out
    const signOutUser = () => {
        return signOut(auth);
    }

    //Google login
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //Github login 
    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const data ={
        user, 
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
        githubLogin,
        loadedItem,
    }

    //Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return() => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderComponent;