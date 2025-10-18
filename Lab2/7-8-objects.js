const fn = () => {
    const obj1 = { name: "Illia" };
    let obj2 = { name: "Yaroslav" };
    
    obj1.name = "Dmytriy";
    obj2.name = "Dmytriy";
    console.log(obj1);
    console.log(obj2);
    // працює бо ми не змінюємо посилання на об'єкт, а змінюємо властивість об'єкта

    obj1 = {bornIn: 2008}; //помилка, бо ми намагаємося змінити посилання на об'єкт
    obj2 = {bornIn: 2008}; //працює бо obj2 оголошений через let
}
fn();

const createUser = (name, city) => {
    const user = {
        name,
        city,
    };
    return user;
}
console.log(createUser("Dmytriy", "Zhytomyr"));