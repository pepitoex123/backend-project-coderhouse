const { fork } = require("child_process");
const path = require("path");

exports.getProcessInfo = (req,res,next) => {
    console.log("The platform is " + process.platform);
    res.render("info/infopage", {
        processInfo: {
            processArgs: process.argv,
            processPlatform: process.platform,
            processVersion: process.version,
            processMemoryUsage: process.memoryUsage.rss,
            processExecutionPath: process.execPath,
            processId: process.pid,
            processCwd: process.cwd
        },
        path: "/api/info",
        pageTitle: "Process Info!"
    })
}

exports.calculateRandomNumbers = (req,res,next) => {
    if(req.query.cant){
        const forked = fork(`${path.join(__dirname,"/fork_example","/childProcess.js")}`);
        forked.on("message", (msg) => {
            console.log('Message from child - counter ', msg);
        })
        forked.send({cant: new Number(req.query.cant)})
    }
    else {
        const forked = fork(`${path.join(__dirname,"/fork_example","/childProcess.js")}`);
        forked.on("message", (msg) => {
            console.log('Message from child - counter ', msg);
        })
        forked.send({cant: 100000})
    }
}

