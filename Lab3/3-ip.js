{
const ipToInt = (ip = '127.0.0.1') => {
    const ipString = ip.split('.');
    const ipArr = ipString.map(Number);
    console.log(ipArr);
    const result = (ipArr[0]<<24)+(ipArr[1]<<16)+(ipArr[2]<<8)+(ipArr[3]);
    return result;
};
console.log(ipToInt());
console.log(ipToInt('165.225.133.150'));
}


const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};
console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));