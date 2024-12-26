import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCog, FaRegNewspaper, FaChevronDown, FaChevronRight } from 'react-icons/fa'; 

const Menu = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const renderMenu = (parentId) => {
    return menuItems
      .filter((item) => item.parentId === parentId)  
      .map((item) => (
        <div key={item.id} className="relative">
          <div
            className="menu-item flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 cursor-pointer rounded-lg"
            onClick={() => handleToggleMenu(item.id)}  
          >
          
            <span className="mr-3"> 
              {item.label === 'Home' && <FaHome />}
              {item.label === 'About Us' && <FaInfoCircle />}
              {item.label === 'Services' && <FaCog />}
              {item.label === 'Contact Us' && <FaRegNewspaper />}
            </span>
            

            <span>{item.label}</span>

           
            {menuItems.some((child) => child.parentId === item.id) && (
              <span className="ml-auto">
                {openMenu === item.id ? (
                  <FaChevronDown className="w-5 h-5" />
                ) : (
                  <FaChevronRight className="w-5 h-5" />
                )}
              </span>
            )}
          </div>

          {openMenu === item.id && menuItems.some((child) => child.parentId === item.id) && (
            <div className="submenu pl-6 py-2 mt-2 space-y-1 border-l border-gray-300">
              {renderMenu(item.id)}  
            </div>
          )}
        </div>
      ));
  };

  return (
    <div>
      {renderMenu(null)} 
    </div>
  );
};

export default Menu;
