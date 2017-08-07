class Person{
	constructor(id,name,age){
		this.id = id;
		this.name = name;
		this.age = age;
	}
	introduce(){
		return `My name is ${this.name}.I am ${this.age} years old.`;
	}
}

class Klass{
	constructor(number){
		this.number = number;
	}
	NUMBER(){
		return this.number;
	}
	assignLeader(student) {
        student.introduce = function () {
            return `My name is ${this.name}.I am ${this.age} years old.I am a Student.I am a Leader of Class ${student.klass.number}.`;
        };
        this.leader = student;
    }

}
class Student extends Person{
	constructor(id,name,age,klass = {}){
		super(id,name,age);
		this.klass = klass;
	}
	introduce() {
        return super.introduce()+`I am at Class ${this.klass.number}`;
    }
}

class Teacher extends Person{
	constructor(id,name,age,klass){
		super(id,name,age);
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