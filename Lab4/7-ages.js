const persons = {
  Symonenko: { born: 1935, died: 1963 },
  Stus: { born: 1938, died: 1985 },
  Vysnia: { born: 1889, died: 1956 },
  Semenko: { born: 1892, died: 1937 },
};

function ages (persons) {
    const age = {};
    for (let person in persons) {
        const personInfo = persons[person];
        age[person] = personInfo.died - personInfo.born;
    }
    return age;
}

console.log(ages(persons)); // { Symonenko: 28, Stus: 47, Vysnia: 67, Semenko: 45 }