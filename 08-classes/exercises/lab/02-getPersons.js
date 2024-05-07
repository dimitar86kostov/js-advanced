class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    get person() {
        return this.firstName
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }

    static arr = []
}

const anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
const softUni = new Person('SoftUni')

console.log(anna, softUni);

// const people = [
//     myMan,
//     new Person('Stephan', 'Johnson', 25),
//     new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
// ]
// console.log(Person.difPerson);
// console.log(people.join('\n'));
