import React, { useState } from "react";
import { useFirebase } from "../context/firebaseContext.jsx";

function Signin() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <button onClick={() => firebase.signin(email, password)}>Signin</button>
    </div>
  );
}

export default Signin;
