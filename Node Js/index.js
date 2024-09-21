const fs = require('fs');


fs.readFile('file.txt', (err,data) => {
    if(err) console.log(err);
    console.log(data.toString());
});
let content = '';

// read file in chumks 

const readStream = fs.createReadStream('file.txt');
readStream.on('data', (chunk) => {
    content += chunk;
});

readStream.on('end', () => {
    console.log(content.toString())
});


// similarly i can write in file as well 

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('new content written','utf-8');
writeStream.end();
writeStream.on('finish', () => {
    console.log("fiished writting ")
})

fs.appendFile('output.txt',`${Date.now()}`,(err,data) => {
  console.log(data);
})

fs.cpSync('./file.txt', 'copy.txt');

//for deleting above file 
fs.unlink('./copy.txt');

// how node js works 
console.log("hello node js ")