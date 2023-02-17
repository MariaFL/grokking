function max(arr) {
    if (arr.length === 0) {
        return 0
    }
    let next = max(arr.slice(1));
    return arr[0] > next ? arr[0] : next;
}


console.log(max([4, 1, 7, 2]))