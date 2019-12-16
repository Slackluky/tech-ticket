import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyBOUVPCtNEqkiGJ5VdCSJxMNey4bg7PFlo",
    authDomain: "tech-ticket-d2e44.firebaseapp.com",
    databaseURL: "https://tech-ticket-d2e44.firebaseio.com",
    projectId: "tech-ticket-d2e44",
    storageBucket: "tech-ticket-d2e44.appspot.com",
    messagingSenderId: "531872430086",
    appId: "1:531872430086:web:772b4571bf668c82282b87",
    measurementId: "G-5NQQNX8K8G"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;