module.exports = function repeater(str, options) {
    let result = '';
    let transformStr = String(str);

    if (!options.repeatTimes) options.repeatTimes = 1;

    for (let i = 0; i < options.repeatTimes; i++) {
        result += transformStr;

        if (options.addition !== undefined) {
            if (options.additionRepeatTimes !== undefined) {
                for (let k = 0; k < options.additionRepeatTimes; k++) {
                    result += options.addition + options.additionSeparator;
                }

                result = result.slice(0, -(String(options.additionSeparator).length));

            } else {
                result += options.addition;
            }
        }

        result += options.separator == undefined ? options.separator = '+' : options.separator;

    }

    return result.slice(0, -(options.separator.length));
}