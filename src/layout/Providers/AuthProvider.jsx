import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../services/Firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const creteUserWithPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUserWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("observing the user", currentUser);
            setUser(currentUser);
            setLoading(false)


        })

        return () => {
            unSubscribe();
        }

    }, [])


    const authInformation =
    {
        user,
        logOut,
        setUser,
        creteUserWithPass,
        loginUserWithEmailPass,
        logInWithGoogle,
        logInWithGithub,
        loading
    }
    return (
        <AuthContext.Provider value={authInformation} >
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}