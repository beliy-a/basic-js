module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, maxDepth = []) {
        maxDepth.push(depth);

        arr.forEach(el => Array.isArray(el) ? this.calculateDepth(el, depth + 1, maxDepth) : depth);

        return Math.max.apply(null, maxDepth);
    }
};