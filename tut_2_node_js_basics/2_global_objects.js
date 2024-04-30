setTimeout(() =>{
    console.log('in the timeout');
    clearInterval(int);
},3000);

const int= setInterval(() => {
    console.log('in the interval');
}, 1000);
// here setTimeout, clearInterval, setInterval are the objects provided by global object