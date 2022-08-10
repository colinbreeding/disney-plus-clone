import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdWHvkMJRXd-y7OYeUuGNnGRAaipnX_Gk",
  authDomain: "disney-plus-clone-77518.firebaseapp.com",
  projectId: "disney-plus-clone-77518",
  storageBucket: "disney-plus-clone-77518.appspot.com",
  messagingSenderId: "76353604044",
  appId: "1:76353604044:web:80a212d4c67bc09ea2f569",
  measurementId: "G-1F1PE3FXR7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
