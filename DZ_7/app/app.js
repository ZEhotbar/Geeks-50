let employees = [
    {
        name: "Иван",
        age: 30,
        gender: "мужской",
        phone: {
            home: "123-45-67",
            mobile: "89012345678"
        }
    },
    {
        name: "Мария",
        age: 25,
        gender: "женский",
        phone: {
            home: "234-56-78",
            mobile: "89123456789"
        }
    },
    {
        name: "Алексей",
        age: 28,
        gender: "мужской",
        phone: {
            home: "345-67-89",
            mobile: "89234567890"
        }
    },
    {
        name: "Владимер",
        age: 20,
        gender: "мужской",
        phone: {
            home: "234-34-78",
            mobile: "89236788090"
        }
    },
    {
        name: "Соня",
        age: 26,
        gender: "женский",
        phone: {
            home: "234-39-99",
            mobile: "892431309565"
        }
    }
];

employees.push({
    name:"Олег",
    age: 40,
    gender: "мужской",
    phone: {
        home: "234-32-76",
        mobile: "892343123899"
    }
});

const NEW_employees = employees.filter(employee => employee.age > 25);

let names = employees.map(employee => employee.name);

for (employees of employees) {
    console.log (`Имя : ${employees.name}, Возраст : ${employees.age}, Пол : ${employees.gender}, Домашиний : ${employees.phone.home}, Сотойвый : ${employees.phone.mobile},`
    )
}

console.log(names);
console.log(NEW_employees)
console.log(employees);
console.log("LOL");