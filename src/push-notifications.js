import * as firebase from 'firebase/app'
import '@firebase/messaging';
export const initializeFirebase = () =>{
    const config  = {
        messagingSenderId : '531872430086'
    };
    firebase.initializeApp(config);
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }