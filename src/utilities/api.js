// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiuWzoTxCMG-rHRyMcXBIxszog1fpLvgQ',
  authDomain: 'wedding-invite-f0d05.firebaseapp.com',
  projectId: 'wedding-invite-f0d05',
  storageBucket: 'wedding-invite-f0d05.firebasestorage.app',
  messagingSenderId: '286468102936',
  appId: '1:286468102936:web:606e244ad02cfc73959c6d',
  measurementId: 'G-J9B3JFNYWZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
