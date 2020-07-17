const Slimbot = require('./src/slimbot');
const slimbot = new Slimbot(process.env.TOKEN);

slimbot.startPolling((err) => {
    console.error(err);
});

setTimeout(()=>{
    slimbot.stopPolling();
},5000)