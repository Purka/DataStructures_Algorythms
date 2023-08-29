const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]) {
    let count = array.length - 1;
    while (count > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
        count--;
    }
}

bubbleSort(numbers);
console.log(numbers);