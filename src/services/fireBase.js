import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const {
    FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID,
    FIREBASE_APPID,
    FIREBASE_MEASUREMENTID
} = import.meta.env



const firebaseConfig = {
    apiKey: 'AIzaSyDAUmHjvR8nlRDkRoeTzrosWFMM-NuctPo',
    authDomain: FIREBASE_AUTHDOMAIN,
    projectId: "netflixclone-react-1a1e1",
    storageBucket: FIREBASE_STORAGEBUCKET,
    messagingSenderId: FIREBASE_MESSAGINGSENDERID,
    appId: "1:739069236533:web:6cf34ed79d654b096ba87c",
    measurementId: FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)