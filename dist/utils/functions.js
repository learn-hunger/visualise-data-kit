export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deeply merges multiple objects into a single object.
 * @date 3/2/2024 - 11:12:38 PM
 *
 * @export
 * @param {*} target - The target object to merge into.
 * @param {...*} sources - The source objects to merge from.
 * @returns {*} - The merged object.
 */
export function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
//# sourceMappingURL=functions.js.map