importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "531872430086"
});
const messaging = firebase.messaging();