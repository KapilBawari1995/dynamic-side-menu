import React from 'react';


const MainContent = ({toggleSidebar}) => {
  return (
    <div className="flex-1 flex flex-col p-2">
     
     <button onClick={toggleSidebar} className="text-gray-600">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2 6h16v2H2zm0 6h16v2H2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default MainContent;
