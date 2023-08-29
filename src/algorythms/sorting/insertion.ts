const numbers = [99, 44, 6, 2, 3, 33, 1];

function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }

}

insertionSort(numbers);
console.log(numbers)