const fs = require('fs');
const readStream = fs.createReadStream('./blog1.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./blog2.txt');
readStream.on('data', (chunk) => {
console.log('\n... New Chunk...\n')
console.log(chunk);
writeStream.write('\n... New Chunk...\n');
writeStream.write(chunk);
});
