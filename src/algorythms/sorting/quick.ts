function quickSort(arr: number[], low: number, high: number) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  // Swap the pivot element with the element at position i + 1
    return i + 1;
}

const array = [10, 6, 1, 2, 7, 8, 9, 5];
console.log(quickSort(array, 0, array.length - 1));
