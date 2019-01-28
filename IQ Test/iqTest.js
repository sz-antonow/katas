function iqTest(numbers) {
    const numberArr = numbers.split(" ");
    const evenNumbers = numberArr.map(number => number % 2);
    const evenCount = evenNumbers.filter(number => number === 1);
    const oddCount = evenNumbers.filter(number => number === 0);

    if (evenCount.length < oddCount.length) {
        return evenNumbers.indexOf(1) + 1
    } else {
        return evenNumbers.indexOf(0) + 1
    }
}