class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	static basicintroduce(name,age){
		return `My name is ${name}.I am ${age} years old.`;
	}
}
class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass = klass;
	}
	introduce(){
		return Person.basicintroduce(this.name,this.age)+`I am at Class ${this.klass}.`;
	}
}
class Worker extends Person{
	introduce(){
		
		return Person.basicintroduce(this.name,this.age)+`I have a job.`;
	}
}
