import { CourseCategory } from "./course-category";
import { CourseTopic } from "./course-topic";

export class Course {
    id: bigint
    courseName: string;
    createDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    courseCategory : CourseCategory;
    courseTopic : CourseTopic;
}