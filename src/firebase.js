import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCh3ST5jeIjQd3j5TtVrzHtIv6qB6g9hdU",
  authDomain: "disney-plus-clone-122f4.firebaseapp.com",
  projectId: "disney-plus-clone-122f4",
  storageBucket: "disney-plus-clone-122f4.appspot.com",
  messagingSenderId: "89889169741",
  appId: "1:89889169741:web:0da3e93362f7d579b55704",
  measurementId: "G-0VGLHZT0HC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
