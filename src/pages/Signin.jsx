import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.js";

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin Success"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Enter your Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Enter your Email here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Enter your Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Enter your Password here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={signinUser}>Signin me in</button>
    </div>
  );
}

export default Signin;
