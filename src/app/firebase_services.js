// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDKUj0uubYtUe5BiuYAMm6Ofq6F1paJ7wQ",
  authDomain: "to-do-app-201b3.firebaseapp.com",
  projectId: "to-do-app-201b3",
  storageBucket: "to-do-app-201b3.appspot.com",
  messagingSenderId: "506523300640",
  appId: "1:506523300640:web:bf2088f6140495bc4e9d45",
  measurementId: "G-GLZSX3HMGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function useTodoItems(setItems) {
  // utilizes the useEffect hook to fetch existing database items and update the state based on response
  useEffect(() => {
    const q = query(collection(db, "to-do-items"));
    getDocs(q).then((querySnap) => {
      const parsedItems = querySnap.docs.map((snap) => {
        return { ...snap.data(), id: snap.id };
      });
      setItems(parsedItems.reverse());
    });
  }, []);
}

export function deleteItem(itemId) {
  //deletes items from the database
  deleteDoc(doc(db, "to-do-items", itemId));
}

export async function addItem(value) {
  //adds items to the database
  const docRef = await addDoc(collection(db, "to-do-items"), { value });
  return docRef.id;
  
}
