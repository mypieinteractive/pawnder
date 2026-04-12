importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDtHHDrRlcnsug93x3hWF3jEx8rFA8QPcw",
  authDomain: "pawnder-59af7.firebaseapp.com",
  projectId: "pawnder-59af7",
  storageBucket: "pawnder-59af7.firebasestorage.app",
  messagingSenderId: "372213409476",
  appId: "1:372213409476:web:bc9945205d1c3fd99c8b91"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handles background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'Pawnder Logo-transparent bg.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});