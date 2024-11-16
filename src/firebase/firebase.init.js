// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRcyVsvNhefqQroB6nIpkt8H3KorVTbLQ",
  authDomain: "dragon-news-51cd1.firebaseapp.com",
  projectId: "dragon-news-51cd1",
  storageBucket: "dragon-news-51cd1.firebasestorage.app",
  messagingSenderId: "1061240776175",
  appId: "1:1061240776175:web:094c365f01149e9285421a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;