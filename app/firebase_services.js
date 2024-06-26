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

export default function useTodoItems(setItems, userEmail) {
  // utilizes the useEffect hook to fetch existing database items and update the state based on response
  // now takes in the users email and uses it as the collection name
  useEffect(() => {
    const q = query(collection(db, userEmail));
    getDocs(q).then((querySnap) => {
      const parsedItems = querySnap.docs.map((snap) => {
        return { ...snap.data(), id: snap.id };
      });
      setItems(parsedItems.reverse());
    });
  }, []);
}

export function deleteItem(itemId, userEmail) {
  //deletes items from the database
  // now takes in the users email and uses it ass the collection name
  deleteDoc(doc(db, userEmail, itemId));
}

export async function addItem(value, userEmail) {
  //adds items to the database
  // now takes in the users email and uses it ass the collection name
  const docRef = await addDoc(collection(db, userEmail), { value });
  return docRef.id;
}
