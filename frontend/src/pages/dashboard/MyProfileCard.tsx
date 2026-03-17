import {Avatar} from '../../components/ui/Avatar';
import { BadgeCheck, Star } from 'lucide-react';

interface ProfileCardProps{
    name:string;
    avatar?:string;
    isVerified?:boolean;
    rating?:number;
    completedTasks?:number;
    role?:string;
    skills?:string[];
}

export default function MyProfileCard({name,avatar,isVerified,rating,completedTasks,role,skills}:ProfileCardProps){
    return(
        <div className='bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-xl p-6'>
            <div className='flex items-center gap-4 mb-6'>
                <Avatar 
                    src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0ea5e9&color=fff&size=200`} 
                    name={name} 
                    size="xl" 
                />
                <div className='flex items-center gap-6'>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    {isVerified && <BadgeCheck className='text-blue-500' />}
                </div>
            </div>
            
            <div className='flex items-center gap-2 mb-4'>
                <Star className='text-yellow-500 fill-current' />
                <span className='font-semibold'>{rating} ({completedTasks} tasks)</span>
            </div>

            <div className='mb-4'>
                <p className='text-gray-400'>Role</p>
                <p>{role}</p>
            </div>

            <div>
                <p className='text-gray-400'>Skills</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {skills?.map((skill, index) => (
                        <span key={index} className='bg-gray-800 px-3 py-1 rounded-full text-sm'>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'fill-orange-500 text-orange-500' : 'text-gray-600'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-400">{rating?.toFixed(1)}</span>
            </div>
            
            <div className="text-sm">
              <span className="text-2xl font-bold text-orange-500">{completedTasks}</span>
              <span className="text-gray-400 ml-2">Tasks Completed</span>
            </div>
          </div>
        </div>
    )
}