const a = 15;
const b = 30;

const range = (a, b) => {
    result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(a, b));

const rangeOdd = (a, b) => {
    result = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            result.push(i);
        }
    }
    return result;
}
console.log(rangeOdd(a, b));