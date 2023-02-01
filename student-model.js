//Model 
Student = function(id,name,email,phone) {
    id = id
    name = name ;
    email = email ;
    phone = phone;
    
    this.setId=function(id){
        id = id;
    }
    
    this.getId=function(){
        return id
    }

    this.setName=function(name){
        name = name;
    }
    this.getName=function(name){
        return name;
    }

    this.setEmail = function(email){
        email = email;
    }
    this.getEmail = function(){
        return email;
    }

    this.setPhone = function(phone){
        phone = phone;
    }
    this.getPhone=function(){
        return phone;
    }
}

module.exports = Student;