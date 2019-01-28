function order(words) {
    const wordsArr = words.split(" ");
    let output = [];
    for (let i = 1; i <= 9; i++) {
        wordsArr[i - 1] && output.push((wordsArr.filter(word => word.indexOf(i) != -1)).toString());

    }
    return output.join(" ");

}