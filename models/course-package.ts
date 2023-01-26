import { Course } from "./course";
import { CourseCategory } from "./course-category";
export class CoursePackage {
    id: bigint;
    packageName: string;
    packageDuration: string;
    createDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    course : Course;
    coursecategory : CourseCategory;
}