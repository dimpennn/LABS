const array = () => {
    let array = [];
    const getIndex = (index) => array[index];
    getIndex.push = (item) => array.push(item);
    getIndex.pop = () => array.pop();
    return getIndex;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first

console.log(arr.pop()); // Виводить: undefined