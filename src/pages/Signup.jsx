import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase.js";

const auth = getAuth(app);

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

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
      <button onClick={createUser}>Signup</button>
    </div>
  );
}

export default Signup;
