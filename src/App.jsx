import "./App.css";
import { firebaseApp } from "../firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Guwahati",
      phone: 1234567890,
      Latitude: 12.3,
      Longitude: 15.3,
    });
    console.log("Result:", result);
  };
  const addSubData = async () => {
    const result = await addDoc(
      collection(firestore, "cities/wJW3nXikDysA3uT3mcE9/places"),
      {
        name: "This ia Lajpat nagar",
        desc: "This is a very rich place in Delhi",
        date: Date.now(),
      }
    );
    console.log("Added sub Data:", result);
  };
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "wJW3nXikDysA3uT3mcE9");
    const sanpshot = await getDoc(ref);
    console.log(sanpshot.data());
  };
  const getDocsByQuery = async () => {
    const collectionRef = collection(firestore, "cities");
    const q = query(collectionRef, where("name", "==", "Guwahati"));
    const snap = await getDocs(q);
    snap.forEach((data) => console.log(data.data()));
  };
  const updateDocument = async () => {
    const ref = doc(firestore, "cities", "ywwztKcqjEZ316LlTuVD");
    await updateDoc(ref, {
      name: "New Delhi",
    });
  };
  return (
    <div>
      <h1>Firebase Tutorial</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={addSubData}>Add Sub Data</button>
      <button onClick={getDocument}>Get Documnets</button>
      <button onClick={getDocsByQuery}>Get Documents By Query</button>
      <button onClick={updateDocument}>Update Document</button>
    </div>
  );
}

export default App;
