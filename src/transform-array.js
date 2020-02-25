module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (arr.length === 0) return [];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            if (i + 1 < arr.length) {
                result.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i - 1 >= 0) {
                result.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-next') {
            i++;
        } else if (arr[i] === '--discard-prev') {
            result.pop();
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};
