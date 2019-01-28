var moveZeros = function (arr) {

    const zerosArr = []
    function removeZeros(arr) {
        let zeroIndex = arr.indexOf(0);

        if (zeroIndex != -1) {
            arr.splice(zeroIndex, 1)
            removeZeros(arr);
            zerosArr.push(0)
        } else {
            return arr
        }
    }
    //recursion
    removeZeros(arr);

    return [...arr, ...zerosArr]
}