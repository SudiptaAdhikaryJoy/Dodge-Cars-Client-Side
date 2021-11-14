import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

// initializeFirebase App
initializeFirebase();
const useFirebase = () => {
        const [user, setUser] = useState({});
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState('');

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const registerUser = (email, password,name, history) => {
            setIsLoading(true);
           createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
                // Signed in 
                setError('');
                const newUser = {email, displayName: name};
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                    }).then(() => {
                    }).catch((error) => {
                    });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(()=> setIsLoading(false));
        }

        const loginUser = (email, password, location, history) =>{
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                    setError('');
                    
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(()=> setIsLoading(false));
        }

        const signInWithGoogle = (location, history) =>{
            setIsLoading(true);
            signInWithPopup(auth, googleProvider)
                .then((result) => {
                    
                    const user = result.user;
                    setError('');
                }).catch((error) => {
                    setError(error.message);
                })
                .finally(()=> setIsLoading(false));
        }

        // observer user state
        useEffect(()=>{
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                   setUser({})
                }
                setIsLoading(false);
                });
                return () => unsubscribed;
        },[])

        const logOut= ()=> {
            setIsLoading(true);
            signOut(auth).then(() => {
                // Sign-out successful.
                }).catch((error) => {
                // An error happened.
                })
                .finally(()=> setIsLoading(false));
        }

        return {
            user,
            isLoading,
            error,
            registerUser,
            loginUser,
            signInWithGoogle,
            logOut
        }
}

export default useFirebase;