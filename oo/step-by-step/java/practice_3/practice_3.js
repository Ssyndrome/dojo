class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	introduce(){
		console.log(`My name is ${this.name}.I am ${this.age} years old.`);
	}
}
class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass = klass;
	}
	introduce(){
		console.log(`My name is ${this.name}.I am ${this.age} years old.I am at Class ${this.klass}.`);
	}
}
var a  = new Student('Tom',21,2);
a.introduce();