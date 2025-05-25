document.addEventListener('DOMContentLoaded', () => {
    const worker = new Worker('../build/src/worker-thread.js');

    worker.addEventListener('message', (event) => {
        console.log('event data', event)
    })

    worker.postMessage('Main thread sent the message')
})


