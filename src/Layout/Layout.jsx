import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen relative">
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Layout;
