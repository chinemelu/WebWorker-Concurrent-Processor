"use strict";
addEventListener('message', (event) => {
    console.log('worker thread got the message', event);
});
