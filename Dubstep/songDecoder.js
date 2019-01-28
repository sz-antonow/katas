function songDecoder(song) {
    const wubFilter = song.split("WUB");
    const spaceFilter = wubFilter.filter(word => word != "");
    const stringArray = spaceFilter.toString();
    const string = stringArray.replace(/,/g, " ");

    return string
}