const database = [
    {name: "Dmytriy", phone: +380631234567},
    {name: "Eve", phone: +380673485167},
    {name: "Vlad", phone: +380512897465},
    {name: "Sania", phone: +380997755210},
];

const findPhoneByName = (name) => {
    for (const element of database) {
        if (element.name === choosenName) {
            return element.phone;
        }
    }
};
const choosenName = "Vlad";
console.log(choosenName + "'s phone is " + findPhoneByName());

/////////////////////////////////////////////////

const arrToHash = (arr) => {
    const hash = {};
    for (const element of arr) {
        hash[element.name] = element.phone;
    }
    return hash;
};

const hash = arrToHash(database);

const findPhoneByNameHash = (name) => {
    return hash[choosenNameHash];
};

const choosenNameHash = "Sania";
console.log(choosenNameHash + "'s phone is " + findPhoneByNameHash("Sania"));