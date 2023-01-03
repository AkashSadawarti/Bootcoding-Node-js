// function getArray(num: number[]) {
//     let num2 = num.join('')
//     //console.log(num2)
//     let num3 = parseInt(num2) + 1;
//     console.log(num3)
//     let res = Array.from(String(num3), Number)
//     console.log(res)
// }
// getArray([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
var Students = /** @class */ (function () {
    function Students(name, mobile, college) {
        this.name = name;
        this.mobile = mobile;
        this.college = college;
    }
    Students.prototype.getDetails = function () {
        return this.name + this.mobile + this.college;
    };
    return Students;
}());
var students = new Students(' Oliver\n', 982464956, '\n RGCER');
var res = students.getDetails();
console.log(res);
