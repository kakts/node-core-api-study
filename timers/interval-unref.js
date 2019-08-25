let countA = 0;
let countB = 0;
const a = setInterval(function() {
    if (countA > 10) {
        a.unref();
        return
    }
    console.log(a.hasRef)
    console.log(Date.now());
    countA++;

}, 1000)

const b = setInterval(function() {
    if (countB > 20) {
        b.unref();
        return
    }
    console.log(a.hasRef)
    console.log(`B: ${Date.now()}`);
    countB++;

}, 1000)

console.log(`----${a.hasRef}`)