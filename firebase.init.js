
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoce_9F584OlNxP2isWTJpcqBoM6wM_Yk",
  authDomain: "volunteer-network-3c859.firebaseapp.com",
  projectId: "volunteer-network-3c859",
  storageBucket: "volunteer-network-3c859.appspot.com",
  messagingSenderId: "147090266893",
  appId: "1:147090266893:web:97d8d9a940135875cf6e44"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;