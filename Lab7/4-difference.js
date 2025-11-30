function difference (arr1, arr2) {
    let resultArr = [];
    for (const element of arr1)
    {
        if (!arr2.includes(element))
        {
            resultArr.push(element);
        }
    }
    return resultArr;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]

const arrayCities1 = ['Beijing', 'Kiev'];
const arrayCities2 = ['Kiev', 'London', 'Baghdad'];
const resultCities = difference(arrayCities1, arrayCities2);
console.log(resultCities);
// Результат: ['Beijing']