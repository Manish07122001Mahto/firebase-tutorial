import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDykPgKr-Bg1ovUnGQBC7GHJDoqqAeKMS4",
  authDomain: "tutorial-2025.firebaseapp.com",
  projectId: "tutorial-2025",
  storageBucket: "tutorial-2025.firebasestorage.app",
  messagingSenderId: "16288752893",
  appId: "1:16288752893:web:e75929cc0c84401297ca94",
  databaseURL: "https://tutorial-2025-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
