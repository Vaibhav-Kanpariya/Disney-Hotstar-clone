import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD-GtivHbJvbYQaFfNiB2bJYtZpMSMYYYw",
  authDomain: "disneyplus-clone-cfd5e.firebaseapp.com",
  projectId: "disneyplus-clone-cfd5e",
  storageBucket: "disneyplus-clone-cfd5e.appspot.com",
  messagingSenderId: "793720049412",
  appId: "1:793720049412:web:a328255d59924028f6ca51",
  measurementId: "G-CGC116F4W5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
// import firebase from "firebase/compat/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD-GtivHbJvbYQaFfNiB2bJYtZpMSMYYYw",
//   authDomain: "disneyplus-clone-cfd5e.firebaseapp.com",
//   projectId: "disneyplus-clone-cfd5e",
//   storageBucket: "disneyplus-clone-cfd5e.appspot.com",
//   messagingSenderId: "793720049412",
//   appId: "1:793720049412:web:a328255d59924028f6ca51",
//   measurementId: "G-CGC116F4W5",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
