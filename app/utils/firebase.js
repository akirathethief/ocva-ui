// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "ocva-2941f.firebaseapp.com",
    projectId: "ocva-2941f",
    storageBucket: "ocva-2941f.appspot.com",
    messagingSenderId: "1057690369249",
    appId: "1:1057690369249:web:19f20f2b31e31717328ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;