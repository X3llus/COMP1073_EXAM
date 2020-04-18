// JavaScript Document

// Person class, used to make a person object.
class Person {
    // Constructor method. takes in name, age, gender, interests when you instantiate a new person and sets variables.
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    // Greeting method. logs "Hi! I'm [insert name]" to the console.
    greeting() {
        console.log(`Hi! I'm ${this.name}`);
    };

    // Bye method. logs "[insert name] has left the building. Bye for now!" to the console.
    bye() {
        console.log(`${this.name} has left the building. Bye for now!`); // removed period from end of this.name.
    };
}
  
// Instantiating two new person classes with given parameters.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// Teacher class, used to make a teacher object. extends the person object thus inheriting all properties and functions.
class Teacher extends Person {
    // Constructor method. takes in all parameters for superclass and for this class.
    constructor(name, age, gender, interests, subject, grade) {
        // calls super method. Used to pass parameters to superclass constructor.
        super(name, age, gender, interests);
        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
}

// Instantiating a new teacher object.
let randomTeacher = new Teacher("Mr.Teacher", 37, "male", ["Teaching", "Reading"]);