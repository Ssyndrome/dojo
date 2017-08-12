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
    }
    NUMBER(){
        return this.number;
    }
    assignLeader(student) {
        if(Klass.members.includes(student)){
            student.introduce = function () {
                return `My name is ${this.name}.I am ${this.age} years old.I am a Student.I am a Leader of Class ${student.klass.number}.`;
            };
            this.leader = student;
        }else{
            return `It is not one of us.`;
        }

    }
    appendMember(student) {
        if (!Klass.members) {
            Klass.members = [];
        }
        Klass.members.push(student);
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
    constructor(id,name,age,klasses = []){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        let message = super.introduce();
        this.klasses.length === 0?message += `I am a teacher.I teach No Class.` : message += `I am a teacher.I teach Class ${(this.klasses+'')}.`;
        return message;
    }
}