const fs = require('fs');
if(fs.existsSync('./deleteme.txt')){
fs.unlink('./deleteme.txt',(err) => {
if (err){
console.log('err');
}
console.log('file deleted');
})
}