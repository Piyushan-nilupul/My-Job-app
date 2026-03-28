self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'අලුත් Job එකක් ඇවිත්!',
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827369.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1827/1827369.png',
        vibrate: [200, 100, 200], // පෝන් එක වයිබ්‍රේට් වෙන්න
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'බලන්න', icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827369.png'},
            {action: 'close', title: 'අයින් කරන්න'}
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Job Manager Update', options)
    );
});
