import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* sidebar */}
            <div className='w-64 min-h-full bg-orange-400'>
                <ul className='menu p-4'>
                    <li>My Profile</li>
                    <li>User Management</li>
                    <li>System Monitoring</li>
                </ul>
            </div>
            {/* content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;