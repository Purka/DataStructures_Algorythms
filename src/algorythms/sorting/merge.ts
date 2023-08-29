const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]) {
    // until it has one number in it
    if (array.length === 1) {
        return array
    }
    // split Array in into right and left
    let half = Math.floor(array.length / 2);
    let left = array.slice(0, half)
    let right = array.slice(half, array.length)

    // call mergeSort recursevly in order to reach array.length 1
    // then merge each array together
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
    // Two pointers solution
    // Left array is going to have length left+right 
    // [1, 3, 5, 0, 0, 0]
    // Since the array is alredy sorted
    // we know that the biggest number is in the end of each array
    // we check the last indexes' numbers and put the biggest in the end of the left array
    // then we just fill in left array with the rest

    let i = left.length - 1;
    let j = right.length - 1;
    let k = (left.length + right.length) - 1;


    while (i >= 0 && j >= 0) {
        if (left[i] < right[j]) {
            left[k] = right[j];
            j--;
        } else {
            left[k] = left[i];
            i--;
        }
        k--;
    }

    while (i >= 0) {
        left[k] = left[i];
        i--;
        k--;
    }

    while (j >= 0) {
        left[k] = right[j];
        j--;
        k--;
    }

    return left
}


const answer = mergeSort(numbers);
console.log(answer);