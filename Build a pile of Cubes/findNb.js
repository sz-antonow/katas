function findNb(m) {
    let sum = 0;
    let i = 0;
    while (sum <= m) {
        i++;
        sum += Math.pow(i, 3);

        if (sum === m) {
            return i
        }
    }
    return -1;
}