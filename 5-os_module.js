const os = require('os')

//info about the user
const info = os.userInfo()
console.log(info);

// method returns the system uptime in seconds

const systemUptime = os.uptime();
console.log(`The sytem is uptime since ${systemUptime} seconds`);

const current = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(current);