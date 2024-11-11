import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/fireBaseInit';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

 const AuthProvider = ({children}) => {
      //  অব্জারব করার লাগি // similar of localStorage 😁😁🛢🛢
      const [user,setUser] = useState(null)
      const [loading,setLoding] = useState(true)


   const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
    setLoding(true)
   }

  const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
    setLoding(true)
   }

   const signout = ()=>{
    return signOut(auth)
    setLoding(true)
   }
   const googleLogin = ()=>{
    return signInWithPopup(auth,provider)
   }
  //  অব্জারব করার লাগি // similar of localStorage 😁😁🛢🛢
  useEffect(()=>{
    const unSubscirbe= onAuthStateChanged(auth,(curentUser)=>{
        setUser(curentUser) 
        setLoding(false)
    })
    return ()=>{
      unSubscirbe();
    }
  },[])

  
    const authInfo ={
        createUser,
       signInUser,
       user,
       signout,
       loading,
       googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
