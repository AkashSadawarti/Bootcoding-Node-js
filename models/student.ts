import { StudentProfile } from "./student-profile";
import { StudentAddress } from "./student-address";
import { CourseEnrollment } from "./course-enrollment";
  export class Student {
    
     id : bigint;
     name :string;
     email : string;
     phone : bigint;
     createDate : Date;
     createdBy : string;
     modifiedDate : Date;
     modifiedBy : string; 
     studentProfile : StudentProfile;
     studentAddress : StudentAddress;
     courseEnrollment : CourseEnrollment;

}
