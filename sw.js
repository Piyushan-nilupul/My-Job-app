self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'අලුත් යාවත්කාලීනයක්!',
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827369.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1827/1827369.png',
        vibrate: [100, 50, 100]
    };
    event.waitUntil(
        self.registration.showNotification('Job Manager', options)
    );
});
