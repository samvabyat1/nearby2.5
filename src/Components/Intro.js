import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTX5olg8yvhyMcmhWM86v6HjOMRu3mPNk",
  authDomain: "nearbys2.firebaseapp.com",
  projectId: "nearbys2",
  storageBucket: "nearbys2.appspot.com",
  messagingSenderId: "716662903466",
  appId: "1:716662903466:web:178014da41b59e39ba36d3"
};
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function Intro() {
  var [user, setuser] = useState("Build your ecosystem");

  useEffect(()=>{
    var l = localStorage.getItem("user");
    if(l!=null){
      setuser(user = l);
    }
  }, [])

  function sign(){
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    setuser(user = result.user.email);
    localStorage.setItem("user", user.substring(0, user.indexOf('@')))

  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  return (
    <div className="bg-white flex-1 text-black py-8 px-5 m-1 rounded-xl">
      <span className="text-sm">
        <span className="bg-yellow-500 px-1 font-bold">Explore</span> Our New
        Tool
      </span>

      <h1 className="int font-bold text-7xl my-8">
        LIVE
        <br />
        THE MOST
        <br />
        SOLID
      </h1>

      <div className="flex">
        <button className="bg-gray-900 px-6 py-2 rounded-2xl text-xs text-white " onClick={sign}>
          <p>{user}</p>
        </button>
      </div>
    </div>
  );
}
