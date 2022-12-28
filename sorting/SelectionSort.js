//Selection Sort

const getSelectionsort = (arr) => {
    for (let i = 0; i <= arr.length; i++) {
        let lowestval = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowestval]) {
                lowestval = j
            }
        }
        if (lowestval != i) {
        [arr[i],arr[lowestval] ] = [arr[lowestval],arr[i]]
        }

    }
    return arr;
}
console.log(getSelectionsort([5, 68, 2, 97, 1, 4]))