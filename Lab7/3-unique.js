function unique (arr) {
    let resultArr = [];
    for (const element of arr)
    {
        if (!resultArr.includes(element))
        resultArr.push(element);
    }
    return resultArr;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]

const resultDirections = unique(['top', 'bottom', 'top', 'left']);
console.log(resultDirections);
// Результат: ['top', 'bottom', 'left']