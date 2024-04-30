# 2. node.js basics

## global objects in node.js

→ global objects are collection of objects that are inbuilt into node.js. They also contain objects inbuilt in javascript.

eg:

```jsx
setTimeout(() =>{
    console.log('in the timeout');
    clearInterval(int);
},3000);

const int= setInterval(() => {
    console.log('in the interval');
}, 1000);
// here setTimeout, clearInterval, setInterval are the objects provided by global object
```

## modules and require

suppose there is a file people_name.js. 

```jsx
const people = ['anu', 'anusha' , 'sneha' , 'shreya'];
const ages= [17,18,18,17]
console.log(people);

module.exports={
    people , ages
};
```

to import this file to another file i.e. modules.js:

 

```jsx
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
```

## streams

→ start using data before it has finished loading