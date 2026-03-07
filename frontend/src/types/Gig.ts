export interface Gig{
    id:string;
    user_id:string;
    title:string;
    description:string;
    category: 'tutoring' | 'freelance' | 'campus-job' | 'internship';
    price: number;
     duration: string;
    skills: string[];
    status: 'open' | 'in-progress' | 'completed' | 'cancelled';
    applicants: number;
    createdAt: Date;
    updatedAt: Date;

}