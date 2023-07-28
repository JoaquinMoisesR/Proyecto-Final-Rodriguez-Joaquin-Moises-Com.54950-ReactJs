import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA_OpYkloIzutipSXsoeJ9KHucQwRshYg",
  authDomain: "agroindustriaeldestino-bd544.firebaseapp.com",
  projectId: "agroindustriaeldestino-bd544",
  storageBucket: "agroindustriaeldestino-bd544.appspot.com",
  messagingSenderId: "3189147136",
  appId: "1:3189147136:web:0d7e9de2ba57881c6d7ae5",
  measurementId: "G-15S260VMXC"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);