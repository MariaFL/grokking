function quicksort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[0];
        let less = [];
        let greater = [];
        for (let i = 1; i < array.length; i++) {
            array[i] <= pivot ? less.push(array[i]) : greater.push(array[i]); 
        }
        return quicksort(less).concat([pivot].concat(quicksort(greater)));
    }
}

console.log(quicksort([10, 5, 2, 3]));