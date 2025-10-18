const average = (a, b) => {
    return (a + b) / 2;
}
console.log(average(2, 4));

const square = (a) => {
    return a * a;
}
console.log(square(3));

const cube = (a) => {
    return a * a * a;
}
console.log(cube(4));

const result = () => {
    const arr = [];
    for (let i = 0; i <= 9; i++) {
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}
console.log(result());