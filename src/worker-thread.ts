self.addEventListener('message', (event) => {
    console.log('worker thre got the message', event.data.data.data)
})