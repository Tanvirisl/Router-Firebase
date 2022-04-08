import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase.innit'
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const useFirebase = () =>{
    const [user, setUser] = useState({});


    const signInWidthGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            setUser(user);
        })
    }
    const signOutGoogle = () =>{
        signOut(auth)
        .then(() =>{})
    }
    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            setUser(user)
        })
    })


    // return [user, setUser];
    return {user, setUser, signInWidthGoogle, signOutGoogle}

}

export default useFirebase;