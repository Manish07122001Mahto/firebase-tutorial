import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase.js";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "manish@gmail.com", "Manish@123").then(
      (value) => console.log(value)
    );
  };
  return (
    <div>
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
