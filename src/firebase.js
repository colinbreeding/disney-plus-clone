const firebaseConfig = {
  apiKey: "AIzaSyCh3ST5jeIjQd3j5TtVrzHtIv6qB6g9hdU",
  authDomain: "disney-plus-clone-122f4.firebaseapp.com",
  projectId: "disney-plus-clone-122f4",
  storageBucket: "disney-plus-clone-122f4.appspot.com",
  messagingSenderId: "89889169741",
  appId: "1:89889169741:web:0da3e93362f7d579b55704",
  measurementId: "G-0VGLHZT0HC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
