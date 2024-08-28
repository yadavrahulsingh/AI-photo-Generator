"use client";

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { auth } from "../firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const[name , setName] = useState('') ; 
  const[email , setEmail] = useState('') ; 
  const[image , setImage] = useState('');


  useEffect(()=> {
    if (typeof window !== 'undefined') {
      // localStorage?.setItem('name',result.user.displayName);
      // localStorage?.setItem('email',result.user.email);
      // localStorage?.setItem('image',result.user.photoURL);
       localStorage?.setItem('name',name);
       localStorage?.setItem('email',email);
       localStorage?.setItem('image',image);
   }
  } , [name , email , image]);


  const router = useRouter();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in with Google:", result.user.auth);
      console.log("User signed in with Google:", result.user.displayName);
      setName(result.user.displayName) ; 
      setEmail(result.user.email) ; 
      setImage(result.user.photoURL) ;
      if (result) {
        router.push("/");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };


  return (
    <div className="min-h-screen  bg-indigo-100  text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-indigo-200 shadow sm:rounded-lg flex justify-center flex-1">
        
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center ">
          
          
                  <button onClick={handleGoogleSignIn}
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-blue-500 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline px-1">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign Up with Google
                            </span>
                        </button>





        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center h-screen hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat overflow-none"
          style={{
          //  backgroundImage: `url('https://media.istockphoto.com/id/2062480307/photo/ai-data-and-big-data-technology-business-people-calculate-analyze-and-visualize-complex.jpg?s=2048x2048&w=is&k=20&c=YHoBvDh1q062lcatbaKYySV9ghTt8bQv4lL9fCS3fo8=')`,
            backgroundImage: `url('https://playground.com/_next/image?url=%2Fimages%2Fsign_in_grid_2x.png&w=1080&q=75')`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default Login;
