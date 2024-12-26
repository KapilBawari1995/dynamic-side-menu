import React, { useState, useEffect } from 'react';
import menuData from '../data/menuData.json';
import SearchInput from './SearchInput';
import Menu from './Menu';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    setMenuItems(menuData);
    setFilteredMenuItems(menuData);
  }, []);


  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (!searchTerm) {
      setFilteredMenuItems(menuItems); 
    } else {
      const filtered = menuItems.filter((item) => {
        const isParentMatch = item.label.toLowerCase().includes(searchTerm);
        const isChildMatch = menuData.some(
          (child) => child.parentId === item.id && child.label.toLowerCase().includes(searchTerm)
        );
        return isParentMatch || isChildMatch;
      });
      setFilteredMenuItems(filtered);
    }
  };

  return (
    <nav className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto h-full">
      <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />


      <div className="space-y-2">
        {filteredMenuItems.length === 0 ? (
          <div className="text-gray-500 text-center">No results found</div> 
        ) : (
          <Menu menuItems={filteredMenuItems} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
