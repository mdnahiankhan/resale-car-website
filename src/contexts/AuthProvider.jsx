import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, currentUser => {
            console.log('User observer');
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubScribe()
    }, [])
    const authinfo = {
        createUser,
        signIn,
        LogOut,
        user,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;