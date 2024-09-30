import { SiGoogledocs } from "react-icons/si";
import { signInWithGoogle } from '../Firebase.js';
import { useState } from "react";


function Login({onLogin}) {
    const [loading, setLoading] = useState(false);
    
    const handleGoogleSignIn = () => {
      setLoading(true);
      signInWithGoogle(onLogin) 
          .then(() => {
              console.log("Login Successfull")
          })
          .catch((error) => {
              console.error("Sign in error:", error);
          })
          .finally(() => {
              setLoading(false);
          });
      };

    return (

        <div className="flex flex-col justify-center items-center bg-gray-200 fixed inset-0">
            <SiGoogledocs className="h-[150px] w-[120px] text-pink-800 mt-[50px]" />
            <p className="text-lg text-gray-500 font-bold">Docx</p>
            <button onClick={handleGoogleSignIn} disabled={loading} className="font-semibold px-8 py-2 rounded-lg shadow-lg bg-pink-700 text-white focus:outline-none hover:bg-pink-600 mt-10">
            {loading ? 'Signing in...' : 'Sign in with Google'}
            </button >

        </div>


    );
}

export default Login