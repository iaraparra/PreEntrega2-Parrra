import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp6g7w_KgYqPXf-wuLGKMAypPNiO1sod4",
  authDomain: "ecommerce-react-26710.firebaseapp.com",
  projectId: "ecommerce-react-26710",
  storageBucket: "ecommerce-react-26710.appspot.com",
  messagingSenderId: "699231328021",
  appId: "1:699231328021:web:d4cc573061528b85bc3b1c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;