const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
    const max = characters.length;  //max - кількість усіх символів, які можемо використати
    let key = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * max);
        key += characters[index];
    }
  return key;
};
const key = generateKey(16, characters);
console.log(key);