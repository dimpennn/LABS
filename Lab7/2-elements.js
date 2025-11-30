function removeElements (arr, ...elements) {
    for (const element of elements){
        const index = arr.indexOf(element);
        if (index >= 0)
        arr.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]

const arrayCities = ['Kiev', 'Beijing', 'Lima', 'Zhytomyr'];
removeElements(arrayCities, 'Lima', 'Berlin', 'Kiev');
console.log(arrayCities);
// Результат: ['Beijing', 'Zhytomyr']