import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const steps = [
        { index: '1', step: 'STEP 1', title: 'YOUR INFO', path: '/' },
        { index: '2', step: 'STEP 2', title: 'SELECT PLAN', path: '/selectplan' },
        { index: '3', step: 'STEP 3', title: "ADD ON'S", path: '/addons' },
        { index: '4', step: 'STEP 4', title: 'SUMMARY', path: '/summary' },
    ];

    return (
        <div className='w-1/3 bg-gray-100 bg-Desktop bg-no-repeat'>
            {steps.map(({ index, step, title, path }) => (
                <div
                    key={index}
                    className={`m-10 text-white flex space-x-4 ${
                        location.pathname === path ? '' : ''
                    }`}
                >
                    <div
                        className={`rounded-full px-4 py-2 border border-white ${
                            location.pathname === path ? 'bg-slate-400 text-black border-transparent' : ''
                        }`}
                    >
                        {index}
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm text-slate-400'>{step}</p>
                        <p className='text-md font-light'>{title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
