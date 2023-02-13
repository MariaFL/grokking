function binarySearch(sortArr, n) {
    let low = 0;
    let hight = sortArr.length - 1;
    let mid, guess;
    do {
        mid = Math.floor((low + hight) / 2);
        guess = sortArr[mid];
        if (guess === n) {
            return mid;
        }
        if (guess > n) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
    } while (low <= hight);
    return null;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));