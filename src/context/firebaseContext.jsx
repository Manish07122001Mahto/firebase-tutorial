import { createContext, useContext } from "react";
import { firebaseApp } from "../../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((value) => {
        console.log(value);
        return value;
      })
      .catch((error) => {
        console.log("Signu error:", error);
        throw error;
      });
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((value) => {
        console.log(value);
        return value;
      })
      .catch((error) => {
        console.log("Error signin:", error);
      });
  };

  const putData = (key, data) =>
    set(ref(database, key), data)
      .then((value) => {
        console.log(value);
      })
      .catch((e) => {
        console.log("Error puting data to firebase realtime database:", e);
        throw e;
      });

  return (
    <FirebaseContext.Provider
      value={{
        signup,
        putData,
        signin,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
