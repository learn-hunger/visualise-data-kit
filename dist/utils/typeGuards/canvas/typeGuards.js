//TypeGuards
export function isBuiltIn(data) {
    return data.model !== undefined;
}
export function isCustom(data) {
    return data.connections !== undefined;
}
//# sourceMappingURL=typeGuards.js.map