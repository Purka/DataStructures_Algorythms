function findFactorialRecursive(number: number): number {
    if (number === 0) return 1;
    if (number === 1) return 1;

    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5))