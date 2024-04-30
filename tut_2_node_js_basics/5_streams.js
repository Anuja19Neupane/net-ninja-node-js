const fs = require('fs');
const readStream = fs. createReadStream('./docs/blog2.txt');
const writeFileStream = fs. createWriteStream('./docs/blog3.txt')

// readStream.on ('data', (chunk) => {
//     console.log('------NEW CHUNK------------');
//     console.log(chunk.toString());
//     writeFileStream.write('\n NEW CHUNK \n');
//     writeFileStream.write(chunk);
// });

// piping
readStream.pipe(writeFileStream);