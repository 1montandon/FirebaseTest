import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_whAnxRzGDg3BJJ7auCWlAnS8-gsDJg8",
  authDomain: "tutorial-2info-2023-eduardo.firebaseapp.com",
  projectId: "tutorial-2info-2023-eduardo",
  storageBucket: "tutorial-2info-2023-eduardo.appspot.com",
  messagingSenderId: "232807419442",
  appId: "1:232807419442:web:b8913a43c7f0a36683362b"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export{db}