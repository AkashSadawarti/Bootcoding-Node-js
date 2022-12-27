//Class Student with parameters

let TOTALMARKS = 300;
class Student{
    constructor(name,roll_No,physics,chemistry,maths){
        this.name = name;
        this.roll_No = roll_No;
        this.physics = physics;
        this.chemistry = chemistry;
        this.maths = maths;
    }

    getPercentage(){
         return (this.chemistry + this.maths + this.physics)/TOTALMARKS * 100
    }
}

let stu = new Student()
console.log( stu.getPercentage().toFixed(2));