const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', callback);

function callback(err, data) {
    if (process.argv[2]) {
        console.log(data.split("\n").length - 1)
    }
}