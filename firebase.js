import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSaQ_2dUYTdU_uJzlbY_U-wMnMzQa-iLs",
  authDomain: "todotaskmanagerapp-37582.firebaseapp.com",
  projectId: "todotaskmanagerapp-37582",
  storageBucket: "todotaskmanagerapp-37582.firebasestorage.app",
  messagingSenderId: "404687054885",
  appId: "1:404687054885:web:c08fa8df5ddc847f0877cc",
  measurementId: "G-DQSMK80HHG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);