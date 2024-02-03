let str = '   Привет    пРивет   Привет  ';
str = str.toLowerCase().trim();
    let arr = str.split(' ');
    arr.forEach((i, index) => {
        if (i.length > 0 && index > 0) {
            arr[index] = arr[index] = i[0].toUpperCase() + i.slice(1);
        }
    });

console.log(arr.join(''));
