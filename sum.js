function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.shift() + sum(arr);
}

console.log(sum([2, 4, 6]));