import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../companent/sherd/Firebase/Firebase";

export const AuthContext = createContext(null)
const CreateContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const createUer = (email, password)=>{
        setLoding(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUser = googleProvider=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubUser = githubProvider=>{
        return signInWithPopup(auth, githubProvider)
    }
    const logOurUser = ()=>{
        setLoding(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubcrides =  onAuthStateChanged(auth, curret=>{
            setLoding(false)
            setUser(curret)
        })
        return ()=>{
            unsubcrides()
        }
    },[])
    const authInfo ={
        user,
        createUer,
        loginUser,
        googleUser,
        githubUser,
        loding,
        logOurUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default CreateContext;