const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
};
console.log(random(2));      // виводить випадкове з проміжку [0, 2), тобто 0 або 1
console.log(random(5, 8));   // виводить випадкове з проміжку [5, 8), тобто 5, 6 або 7