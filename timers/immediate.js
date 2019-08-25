let a = setImmediate(function() {
    console.log(`Immediate1: ${Date.now()}`);
})


let count = 0;
const b = setInterval(function() {
    console.log(`Interval1: ${Date.now()}`);
    count++;
    if (count === 10) {
        console.log('10')
        console.log()
        a = a.ref()
    }
}, 1000)