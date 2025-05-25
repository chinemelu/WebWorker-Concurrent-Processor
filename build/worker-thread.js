"use strict";
self.addEventListener('message', (event) => {
    console.log('worker thre got the message', event.data[0]);
});
