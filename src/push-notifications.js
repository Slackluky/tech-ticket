import * as firebase from 'firebase/app'

export const initializeFirebase = () =>{
    const config  = {
        messagingSenderId : '993989355210'
    };
    firebase.initializeApp(config);
}