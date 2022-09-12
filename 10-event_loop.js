const { readFile } = require('fs')

console.log("starting task")

readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("task is completed")
})

console.log("end of script")