class Person {
  constructor(name, age) {
    this.name = name; // Use public field syntax
    this.age = age; // Use public field syntax
  }

  // No need for getter and setter

}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
