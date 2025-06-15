import { useEffect, useState } from "react";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase.js";
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
      } else {
        //user logged out
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <>
        <Signup />
        <Signin />
      </>
    );
  }
  return (
    <div>
      <h1>Hello '{user.email}'</h1>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
