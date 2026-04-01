importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBVL5PMnADsBYkTtJJmZS9BkfX-BvTQskQ",
    projectId: "my-project-ec961",
    messagingSenderId: "1092273732629",
    appId: "1:1092273732629:web:c1536fe7d1a5781d80221c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background එකේදී notification ලැබෙන ආකාරය
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // ඔබට අවශ්‍ය icon එකක path එකක් දෙන්න
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
