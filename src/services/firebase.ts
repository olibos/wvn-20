import { initializeApp } from "firebase/app";
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore/lite';
import type { DocumentData, QueryDocumentSnapshot, SnapshotOptions} from 'firebase/firestore';

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

type Confirmation = Partial<{
    confirmed: boolean;
    timestamp: number;
    easterEgg: boolean;
    veteran: boolean;
    konami: boolean;
}>

const confirmationConverter = {
    toFirestore: (data: Confirmation) => data,
    fromFirestore: (snapshot: QueryDocumentSnapshot<Confirmation, DocumentData>, options?: SnapshotOptions): Confirmation => snapshot.data(options),
};

const getDocRef = () => !!auth.currentUser?.email && doc(db, "confirmations", auth.currentUser.email).withConverter(confirmationConverter);

export async function ensureSignedIn() {
  if (auth.currentUser) return;

  try{
    if (await signin()) return;
  }catch(error){
    console.log(error);
  }
  
  alert("Malheureusement, je n'ai pas pu vous identifier.\nRéessayer avec votre compte Wavenet et si le problème persiste envoyez moi un petit mail 😉.");
  throw new Error("Not signed in");
}

export async function isJoining() {
  const docRef = getDocRef();
  if (!docRef) return;
  const response = await getDoc(docRef);
  if (response.exists()) return response.data().confirmed;
}

export async function setJoining(confirmed: boolean) {
  await ensureSignedIn();
  const docRef = getDocRef();
  docRef && await setDoc(docRef, { confirmed, timestamp: Date.now() }, { merge: true });
}

async function setField<TKey extends keyof Confirmation>(name: TKey, value: Confirmation[TKey]) {
  const docRef = getDocRef();
  docRef && await setDoc(docRef, { [name]: value }, { merge: true });
}

export const setEasterEgg = () => setField("easterEgg", true);
export const setVeteran = () => setField("veteran", true);
export const setKonami = () => setField("konami", true);
