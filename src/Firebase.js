// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKxJ9YPGfQN8TnPLqD6U54TgogNXiLGkM",
  authDomain: "doc-x-c44a3.firebaseapp.com",
  projectId: "doc-x-c44a3",
  storageBucket: "doc-x-c44a3.appspot.com",
  messagingSenderId: "570352713737",
  appId: "1:570352713737:web:c647be88740c16d7c278d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (handleLogin) => {
  signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        const userProfilePicture = result.user.photoURL;

        localStorage.setItem("userProfilePicture", userProfilePicture)
        
        console.log("User object:", user); 
        
        handleLogin(); 
    })
    .catch((error) => {
      console.log("Sign-in error:", error);
    });
};
