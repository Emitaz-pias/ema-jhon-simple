import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const LogIn = () => {
  const history = useHistory();
  const location= useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [loddedInUser,setLoggedInUser] = useContext(UserContext);

    const handleGoogleSignIn =()=>{
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
   const user = result.user
   console.log(user);
    setLoggedInUser(user)
    history.replace(from);

  }).catch((error) => {
    
  const errorCode = error.code;
  const errorMessage = error.message;
  
   const email = error.email;
   
  const credential = error.credential;
  console.log(errorCode,"hi");
    console.log("error", errorMessage);
  });
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>sign in with google</button>
        </div>
    );
};

export default LogIn;