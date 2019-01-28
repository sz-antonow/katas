
function isIsogram(str) {

    if (typeof (str) === 'string') {
        str = str.toLowerCase();
        let isIsogram;

        for (let i = 0; i < str.length; i++) {
            let chart = str.charAt(i); //aktualna litera do zmiennej chart
            for (let x = i + 1; x < str.length; x++) {
                if (chart === str.charAt(x)) {
                    isIsogram = false;
                    break;
                } else {
                    isIsogram = true;
                }
            }

            if (!isIsogram) {
                return false;
            }
        }

        return isIsogram || !str;
    } else {
        return false;
    }
}