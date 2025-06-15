import React, { useState } from "react";
import { useFirebase } from "../context/firebaseContext.jsx";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../../firebase.js";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const signUpWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

function Signup() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Enter your Email here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Enter your Password here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={signUpWithGoogle}>Sign in with Google</button>
      <button
        onClick={() => {
          firebase.signup(email, password);
          firebase.putData("users/" + "manishmahto", { email, password });
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;
