import React, { useState } from 'react';
import '../components/DropdownMenu.css';

const DropDown = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="dropdown-container">
      <button onClick={toggleMenu} className="dropdown-button">
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};


export default DropDown
