import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVMcTfBXEBBObu2SOZHEKBVYmDVwIzStA",
    authDomain: "spax-d24fc.firebaseapp.com",
    projectId: "spax-d24fc",
    storageBucket: "spax-d24fc.appspot.com",
    messagingSenderId: "328894811396",
    appId: "1:328894811396:web:f54c1eab9c5e4dcb57d451",
    measurementId: "G-TNQ7VBJYN3"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
