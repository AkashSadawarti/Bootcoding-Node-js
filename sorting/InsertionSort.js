//insertion-Sort

function getInsertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp =  array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        } array[j + 1] = temp;
    }
    return array;
}

let res = getInsertionSort([5, 1, 7, 6]);

console.log(res);