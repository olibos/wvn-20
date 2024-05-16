import { initializeApp } from "firebase/app";
import { doc, setDoc, getDoc, getFirestore, type DocumentData } from 'firebase/firestore';

import {
    getAuth,
    signInWithPopup,
    OAuthProvider,
    setPersistence,
    browserSessionPersistence,
  } from "firebase/auth";
import { writable, type Writable } from "svelte/store";
const firebaseConfig = {
  apiKey: "AIzaSyBWecGRYsMeIEDCz3YDt2Ntmp-vCXn9i-s",
  authDomain: "wvn-20.firebaseapp.com",
  projectId: "wvn-20",
  storageBucket: "wvn-20.appspot.com",
  messagingSenderId: "685380796457",
  appId: "1:685380796457:web:2f0da2968a06cca9b51c38"
};

const app = initializeApp(firebaseConfig);

const provider = new OAuthProvider('microsoft.com');
provider.setCustomParameters({
    tenant: 'wavenet.be',
  });

const auth = getAuth();

export async function signin(){
  await setPersistence(auth, browserSessionPersistence);
  if (auth.currentUser?.email) return true;
  const user =await signInWithPopup(auth, provider);
  return !!user?.user.email;
}

const db = getFirestore(app);

type Confirmation = {
    confirmed: boolean;
    timestamp: number;
}

const confirmationConverter = {
    toFirestore: (data: Confirmation) => data,
    fromFirestore: (snapshot: DocumentData, options: any): Confirmation => {
        const data = snapshot.data(options);
        return {
            confirmed: data.confirmed,
            timestamp: data.timestamp
        }
    }
}

export async function isJoining() {
    if (!auth.currentUser?.email) return false;
    const docRef = doc(db, "confirmations", auth.currentUser.email).withConverter(confirmationConverter);
    const response = await getDoc(docRef);
    return response.exists() && response.data().confirmed;
}

export async function setJoining(confirmed: boolean) {
    if (!auth.currentUser?.email) return;
    const docRef = doc(db, "confirmations", auth.currentUser.email).withConverter(confirmationConverter);
    await setDoc(docRef, { confirmed, timestamp: Date.now() });
}