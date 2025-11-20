const fs = require('fs');
fs.mkdir('./assets',(err) => {
if (err){
console.log('err');
}
console.log('folder created');
})