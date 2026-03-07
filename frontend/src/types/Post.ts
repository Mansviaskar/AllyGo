

export interface Post{
    id:string;
    user_id:string,
    title:string;
    content:string;
    category: 'learning' | 'career' | 'campus' | 'general';
    tags: string[];
    cretedAt:Date;
    updatedAt:Date;

}