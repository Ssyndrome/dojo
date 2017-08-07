class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	introduce(){
		return `My name is ${this.name}.I am ${this.age} years old.`;
	}
}

class Klass{
	constructor(number){this.number = number;}
	NUMBER(){
		return this.number;
	}
}

class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		let a = new Klass(klass);
		this.klass = a.NUMBER();
	}
	introduce(){
		return super.introduce()+`I am at Class ${this.klass}.`;
	}
}

class Teacher extends Person{
	constructor(name,age,klass){
		super(name,age);
		let a = new Klass(klass);
		this.klass = a.NUMBER();
	}
	introduce(){
		if(this.klass == undefined){
			return super.introduce()+`I am a teacher.I teach No Class.`;
		}else{
			return super.introduce()+`I am a teacher.I teach Class ${this.klass}.`;
		}
	}
}