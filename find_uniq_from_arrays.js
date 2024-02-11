function find_uniq_from_arrays(cycles) {
    let a = [];
    let b = [];

    //let a = [1, 2, 3, 4, 5, 6, 10];
    //let b = [4, 5, 6, 7, 8, 9, 10, 15, 10];

    for (let i = 0; i < cycles; i++) {
        a.push(Math.floor(Math.random() * 90000000));
        b.push(Math.floor(Math.random() * 12000000));
    }

    let arr = [];
    let uniq = [];
    let repeat = [];

    arr = a.concat(b);
    let countObj = {};

    arr.forEach((i) => {
        if (!countObj[i]) {
            countObj[i] = 1;
        } else if (countObj[i] < 3) {
            countObj[i] = countObj[i] + 1;
        }
    });

    Object.keys(countObj).forEach(i => {
        if (countObj[i] > 1) {
            repeat.push(i)
        } else {
            uniq.push(i);
        }
    });

    return {
        uniq,
        repeat
    };
}

let timers = [];

for(let i = 0; i < 20; i++) {
    let start = new Date();
    find_uniq_from_arrays(4000000);
    let end = new Date();
    console.log('time', end-start);
    timers.push(end-start);
}

console.log(Math.ceil(timers.reduce((a, b) => a + b, 0) / timers.length));
