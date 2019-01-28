function formatDuration(seconds) {

    const time = {
        year: 60 * 60 * 24 * 365,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    }
    let output = "";

    for (let name in time) {

        let timeValue = Math.floor(seconds / time[name]);

        if (timeValue) {
            seconds = seconds % time[name];
            let and = "", suffix = "", comma = "";

            if (!seconds && output.length != 0) {
                and = " and ";
            }
            if (timeValue > 1) {
                suffix = "s";
            }
            if (output.length > 0 && !and.length) {
                comma = ", "
            }
            output += comma + and + timeValue + " " + name + suffix;
        }
    }

    return output || "now"
}