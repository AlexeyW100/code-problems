function checkSymm (arr) {
    let doSym = true;

    // search center
    let normalize = [];
    let xs = arr.map((i) => {
        normalize.push(i[0]+'-'+i[1]);
        return i[0];
    });

    let centerX = (Math.max(...xs) + Math.min(...xs)) / 2;

    arr.forEach((i, index) => {

        let mirror, diff;

        if (i[0] > centerX) {
            diff = i[0] - centerX;
            mirror = centerX - diff;
        }

        if (i[0] < centerX) {
            diff = centerX - i[0];
            mirror = centerX + diff;
        }

        if (mirror && diff) {
            let findIndex = normalize.indexOf(`${mirror}-${i[1]}`);

            if (findIndex !== -1) {
                normalize.splice(findIndex, 1);
            } else {
                doSym = false;
            }
        }
    });

    return doSym;
}

console.log(checkSymm([[0, 0], [1, 1], [2, 2], [3, 1], [0, 0], [4, 0], [4, 0]]));
console.log(checkSymm([[0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]));
console.log(checkSymm([[0, 0]]));
console.log(checkSymm([[0, 0], [100500, 0]]));
console.log(checkSymm([[0, 0], [100500, 1]]));
console.log(checkSymm([[0, 0], [1, 0], [3, 0]]));
console.log(checkSymm([[3, 0], [3, 1], [3, 2], [4, 1], [5, 2], [2, 1], [1, 2], [0, 0], [6, 0]]));
