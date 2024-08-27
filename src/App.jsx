import { useState } from 'react'
import { firebaseConfig } from './fireconfig'
import './App.css'
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

function App() {


  return (
    <>
    <div className="headcont">
      <div className='header'><h3>Zone</h3> </div>
    </div>

    <div className="center">
     <div className="signinWithGoogleBtn">Sign in with google</div>
    </div>
    </>
  )
}

export default App
