console.log("Hello from childProcess.js")

process.on('message', (cant) => {
    console.log('Message from parent:', cant);
    for(let i=0;i<cant;i++){
        process.send({counter: i})
    }
});
