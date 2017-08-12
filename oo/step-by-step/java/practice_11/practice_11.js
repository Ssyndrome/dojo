class Person{
    constructor(id,name,age){
        if(!Person.ids){
            Person.ids = [];
        }
        try{
            if(Person.ids.includes(id)){
                throw `id-${id}已存在`;
            }else{
                this.id = id;
                this.name = name;
                this.age = age;
                Person.ids.push(this.id);
            }
        }catch(err){
            console.log(`错误：`+err+`。`);
        }
    }
    introduce(){
        return `My name is ${this.name}.I am ${this.age} years old.`;
    }
}

class Klass{
    constructor(number){
        this.number = number;
            this.members = [];
    }
    NUMBER(){
        return this.number;
    }
    assignLeader(student) {
        if(this.members.includes(student)){
            student.introduce = function () {
                return `My name is ${this.name}.I am ${this.age} years old.I am a Student.I am a Leader of Class ${student.klass.number}.`;
            };
            this.leader = student;
        }else{
            return `It is not one of us.`;
        }

    }
    appendMember(student) {
        this.members.push(student);
    }
    isIn(student){
        if(Klass.members.includes(student)){
            return true;
        }else{
            return false;
        }
    }
}
class Student extends Person{
    constructor(id,name,age,klass = {}){
        super(id,name,age);
        this.klass = klass;
        this.klass.appendMember(this);
    }
    introduce() {
        return super.introduce()+`I am at Class ${this.klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(id,name,age,klasses =[]){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        let message = super.introduce();
        this.klasses.length === 0?message += `I am a teacher.I teach No Class.` : message += `I am a teacher.I teach Class ${(this.klasses+'')}.`;
        return message;
    }
    isTeaching(student){
        return this.klasses.some((klass) => {return klass.isIn(student);});
    }
}
var klass1 = new Klass(1);
var klass2 = new Klass(2);
var Tom = new Student(22,"Tom",13,klass1);
klass2.appendMember(Tom);
console.log(Tom.introduce());