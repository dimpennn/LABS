function removeElement (arr, element) {
    const index = arr.indexOf(element);
    if (index >= 0)
    arr.splice(index, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const arrayCities = ['Kyiv', 'Beijing', 'Lima', 'Zhytomyr'];
removeElement(arrayCities, 'Lima'); // видалить 'Lima' з масиву
removeElement(arrayCities, 'Berlin'); // не видалить нічого
console.log(arrayCities);
// Результат: ['Kyiv', 'Beijing', 'Zhytomyr']