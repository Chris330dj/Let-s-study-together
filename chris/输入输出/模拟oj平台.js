let fs = require("fs");
let data = "";
let readerStream = fs.createReadStream('data.txt');
readerStream.on('data', function(chunk) {
    data += chunk;
 });
