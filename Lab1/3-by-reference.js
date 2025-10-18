const inc = (obj) => {
    return obj.n++;
};
const obj = {
    n: 9 
};
inc(obj);
console.log(obj);