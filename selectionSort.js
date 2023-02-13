function findSmallest(arr) {
    let smallestIndex = 0;
    let smallest = arr[smallestIndex];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallestIndex = i;
            smallest = arr[smallestIndex];
        }
    }

    return smallestIndex;
}

function selectionSort(arr) {
    const sortArr = [];
    let newArr = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        const smallest = findSmallest(newArr);
        sortArr.push(...newArr.splice(smallest, 1));
    } 

    return sortArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));