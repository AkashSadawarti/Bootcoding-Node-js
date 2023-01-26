
export class User{
    id : bigint;
    username : string;
    email : string;
    password : string;
    role : string = "";
    createDate : Date;
    createdBy : string;
    modifiedDate : Date;
    modifiedBy : string;

}

//module.exports = User;