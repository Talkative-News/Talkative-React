import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs} from 'firebase/firestore';


const firebaseConfig = {
    // Your Firebase configuration details here
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const adminTable = collection(firestore, 'admin');
// const googleProvider = new GoogleAuthProvider(app);

export { auth, firestore, GoogleAuthProvider, adminTable, getDocs}; // Export the initialized instances

