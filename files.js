const fs = require('fs');
fs.writeFile('./blog1.txt','I am Gemini',() => {
console.log('file was written')
})