import { useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, House, Image, Scissors, SquarePen, Users } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    {
        to: '/ai',
        label: 'Dashboard',
        icon:House
    },
    {
         to: '/ai/write-article',
        label: 'Write Article',
        icon:SquarePen
    },
     {
         to: '/ai/blog-titles',
        label: 'Blog Titles',
        icon:Hash
    },
      {
         to: '/ai/generate-images',
        label: 'Generate Images',
        icon:Image
    },
       {
         to: '/ai/remove-background',
        label: 'Remove Background',
        icon:Eraser
    },
        {
         to: '/ai/remove-object',
        label: 'Remove Object',
        icon:Scissors
    },
         {
         to: '/ai/review-resume',
        label: 'Review Resume',
        icon:FileText
    },
          {
         to: '/ai/community',
        label: 'Community',
        icon:Users
    },
]

const Sidebar = ({ sidebar, setSidebar }) => {
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();
    return (
        <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14
        bottom-0 ${sidebar?'translate-x-0':'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
            <div className='my-7 w-full'>
                <img src={user.imageUrl} alt="User avatar" className='w-13 rounded-full mx-auto' />
                <h1 className='mt-1 text-center'>{user.fullName}</h1>
                <div>
                    {navItems.map(({to,label,Icon}) => (
                        <NavLink key={to} to={to} end={to === '/ai'} onClick={() => setSidebar(false)} className={({ isActive })=>`px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C81F6 to-[#9234EA text-white' :
                        ''
                        }`}>
                            {
                                ({ isActive }) => (
                                    <>
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                                        {label}
                                    </>
                                )
                                    }
                        </NavLink>
                    ))}
                </div>
         </div>
        </div>
    )
}

export default Sidebar