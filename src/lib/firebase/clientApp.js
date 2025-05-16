'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyChH78UTlloPMk7mbQhBTWI0qmrqv0flBY',
	authDomain: 'next-portfolio-jac.firebaseapp.com',
	projectId: 'next-portfolio-jac',
	storageBucket: 'next-portfolio-jac.firebasestorage.app',
	messagingSenderId: '893097224394',
	appId: '1:893097224394:web:68f14a47759b7155656c33',
	measurementId: 'G-0Y8154W05N',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
