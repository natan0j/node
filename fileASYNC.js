//file module ale asynchronicznie czyli mozna kierowac kolejnoscia funkcji

//w ten sposob dochodzisz do dokladnego modulu z wiekszych pakietow
const {readFile, writeFile} = require('fs')
console.log('start');
//mozna rowniez
// const fs = require('fs);
// fs.readFileSync

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return; 
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err,result)=> {
        if(err) {
            console.log(err);
            return; 
        }
        const second = result;
        writeFile('./content/result-async.txt', `Result is: ${first}, ${second}`, (err,result) =>
    {
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task');
    })
    })
})
console.log('start next task');