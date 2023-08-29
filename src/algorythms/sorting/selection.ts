const numbers = [99, 44, 6, 2, 3, 33, 1];

function selectionSort(array: number[]) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length - 1; i++) {
        min = array[i]
        minIndex = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j]
                minIndex = j;
            }
        }
        if (array[i] > array[minIndex]) {
            const temp = array[i];
            array[i] = min;
            array[minIndex] = temp;
        }
    }
}

selectionSort(numbers);
console.log(numbers)