export interface User{
    user_id:string;
    user_name:string;
    user_email:string;
    user_password:string,
    user_role:'student'|'mentor'|'admin';
    university?:string;
    course:string;
    specialization:string;
    year_of_graduation?:number;
    skills:string[];
    createdAt:Date;
    updatedAt:Date;
}