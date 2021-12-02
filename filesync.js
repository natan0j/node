//Modul pokazujacy operacje na plikach filesync

//w ten sposob dochodzisz do dokladnego modulu z wiekszych pakietow
const {readFileSync, writeFileSync} = require('fs')

//mozna rowniez
// const fs = require('fs);
// fs.readFileSync

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done');
console.log('start next one');