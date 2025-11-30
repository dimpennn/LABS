const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== "function") {
            throw new Error('There are elements that are not a function');
        }
    }
    return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

const f3 = pipe(inc, 7, cube);
console.log(f3(6));