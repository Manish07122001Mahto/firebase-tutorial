import { useEffect, useState } from "react";
import "./App.css";
import { firebaseApp } from "../firebase";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";
const db = getDatabase(firebaseApp);

function App() {
  const [name, setName] = useState(null);
  const purData = () =>
    set(ref(db, "root/a/b"), { id: 2, name: "Manish Mahto", gender: "Male" });

  // const getData = get(child(ref(db), "root/a")).then((sanp) => {
  //   console.log("Data:", sanp.val());
  // });
  useEffect(() => {
    onValue(ref(db, "root/a/b"), (sanp) => setName(sanp.val().name));
  }, []);
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={purData}>Set Data</button>
    </div>
  );
}

export default App;
