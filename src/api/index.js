import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import images from "../json/images.json";


const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APPID
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "images");

export const feedImages = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imagesCollection);
  querySnapshot.forEach(async (images) => {
    await deleteDoc(doc(db, "image", images.id));
  });
  // ADD NEW DOCS
  images.forEach(async (image) => {
    const docRef = await doc(imagesCollection);
    await setDoc(docRef, { ...image, id: docRef.id });
  });
};

export const getImages = async () => {
  const querySnapshot = await getDocs(imagesCollection);
  // Convert query to a json array.
  let result = [];
  querySnapshot.forEach(async (image) => {
    await result.push(image.data());
  });
  console.log({ result });
  return result
};