export function twodecimals(input) {
    return Math.round(input * 100) / 100;
}

export function cleannumber(input) {
    if (typeof input == "string") {
        input = input.replace(/,/g, "");
        return parseFloat(input);
    }
    if (typeof input == "number") {
        return input;
    }
}