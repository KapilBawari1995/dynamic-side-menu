import React from 'react';
import Navbar from './Navbar';
import Togal from './Togal';

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
   
 

        <aside
            className={`w-64 bg-white border-r absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 z-10`}
        >
            <div className="flex flex-col h-full">


                <Togal toggleSidebar ={toggleSidebar} />
                <Navbar />
            </div>
        </aside>
     
    );
};

export default Sidebar;
