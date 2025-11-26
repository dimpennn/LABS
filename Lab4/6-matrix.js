const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function max (array) {
    let max = array [0][0];
    for (let subarray of array) {
        for (let value of subarray) {
            if (value > max) {
                max = value;
            }
        }
    }
    return max;
}

console.log(m); // 9