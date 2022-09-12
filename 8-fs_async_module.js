const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result

        writeFile('./content/async-write.txt', `Here is the async written way: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result)
        })
    })

})