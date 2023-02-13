
let suffix = 'bootcoding-@';
let batch = ['AB', 'BZ', 'CE', 'DF']
let min = 001;
let max = 999;
function getEnrollmentNo() {
    let random = min + Math.floor(Math.random() * (max - min))
    let randomBatch = Math.floor(Math.random() * batch.length)
    let res = suffix + batch[randomBatch] + random;
    return res;
}

console.log(getEnrollmentNo())

