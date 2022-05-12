

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKAxf_GJ1Fojy2NlWdMSQ0BUBvQWn-5iU",
  authDomain: "personal-gym-trainer-c5484.firebaseapp.com",
  projectId: "personal-gym-trainer-c5484",
  storageBucket: "personal-gym-trainer-c5484.appspot.com",
  messagingSenderId: "1017833766917",
  appId: "1:1017833766917:web:acc8dee36bba44e2f0dc6c",
  measurementId: "G-MH2EM57TWN"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;
