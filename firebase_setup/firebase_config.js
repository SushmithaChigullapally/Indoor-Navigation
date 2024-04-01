import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNp51uqg3kPNrn4cbRtFMtNBwx64-_Gsw",
  authDomain: "app1-1e25f.firebaseapp.com",
  projectId: "app1-1e25f",
  storageBucket: "app1-1e25f.appspot.com",
  messagingSenderId: "772570054720",
  appId: "1:772570054720:web:a350a2f0b9e3bee26b9fa5"
}


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app,auth};