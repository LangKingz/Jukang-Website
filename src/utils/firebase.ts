// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRBdH9uyL97CRFpwpqoYn5atMypXiyYc",
  authDomain: "manhwa-36e74.firebaseapp.com",
  projectId: "manhwa-36e74",
  storageBucket: "manhwa-36e74.firebasestorage.app",
  messagingSenderId: "518116789019",
  appId: "1:518116789019:web:10be5b5ea8415e885961be",
  measurementId: "G-9J7MQ49XT1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);


const db = getFirestore(app)

export { db };