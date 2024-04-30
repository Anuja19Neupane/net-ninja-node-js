// to import people_name.js file
//const xyz = require('./people_name');

//console.log(xyz); // this is an empty object
// console.log(people); importing file won't give access to the things in that file
// to do this: we have to export module in people_name.js file


const {people,ages}=require('./people_name');
console.log(people, ages);

// to know about the os
const os=require('os');
console.log(os.platform(), os.homedir()) 