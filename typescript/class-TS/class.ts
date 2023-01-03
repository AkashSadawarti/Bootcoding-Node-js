


// function getArray(num: number[]) {
//     let num2 = num.join('')
//     //console.log(num2)
//     let num3 = parseInt(num2) + 1;
//     console.log(num3)
//     let res = Array.from(String(num3), Number)
//     console.log(res)
// }
// getArray([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

 class Students{
    private name : string;
    private mobile : number;
    public college : string
    public constructor(name:string,mobile:number,college:string){
        this.name = name;
        this.mobile = mobile;
        this.college = college;
    }
    public getDetails(){
        return this.name + this.mobile + this.college;
     }
 }

 let students = new Students(' Oliver\n', 982464956,'\n RGCER')
 let res =  students.getDetails();
 console.log(res);
 