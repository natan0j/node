//first app containing module problems

const names = require('./names')
const sayHi = require('./utils')
console.log(names);

sayHi(names.john)
sayHi(names.peter)
sayHi(names.susan)
require('./add')

