import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
   

 
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 
  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleClick = () => {
    // Call function 1
    toggleMenu();

    // Call function 2
    toggleSubMenu();
  };


 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click outside the menu, hide the sub-menu
        setSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

//enter mouse hover drop down
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  return (
   

  <header className='header-section a2-bg  header-menu w-100'>
    <div className="container">
      <div ref={menuRef}>
        <div className="navbar">
            <Link to="/"><img src="logo.png" alt="Example" /></Link>
          
              {/* menu icon responsive mobile */}
              <a onClick={toggleMenu} className="menu-icon ">☰</a>
                
              {/* start responsive navbar */}
              {isMenuOpen && (
              <ul className='res-nav-list navbar-collapse'>

                <li><Link to="/" onClick={toggleMenu} > home </Link></li>
                <li><a onClick={toggleSubMenu} > Markets <FontAwesomeIcon icon={faAngleDown}  className="custom-icon" /></a>
                    {isSubMenuOpen && (
                      <ul className="submenu2">
                          <li><Link to="/forex" onClick={handleClick} >Forex</Link></li>
                          <li><Link to="/Metals" onClick={handleClick} >metals</Link></li>
                          <li><Link to="/Indices" onClick={handleClick} >indices</Link></li>
                          <li><Link to="/Stock" onClick={handleClick} >stock</Link></li>
                          <li><Link to="/cryptocurrency" onClick={handleClick} >crypto currency</Link></li>
                      </ul>
                    )}
                </li>
                <li><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>about</Link></li>
                <li> <a href='' className='res-cmn-btn  fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1'>login <FontAwesomeIcon icon={faArrowRight} /></a></li>
              </ul>
              )}
              { /*  end start responsive navbar */}

              { /*   start main navbar */}
              <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{position: 'relative', display: 'inline-block',}}>
              <ul className='nav-list'>
                  <li><Link to="/">home </Link></li>
                  
                  <li><a onClick={toggleSubMenu} >Markets <FontAwesomeIcon icon={faAngleDown}  className="custom-icon" /></a>
                  
                      {isHovered &&  (
                          <ul className='submenu'>
                            
                            <li><Link to="/forex" onClick={toggleSubMenu} >Forex</Link></li>
                            <li><Link to="/Metals" onClick={toggleSubMenu} >metals</Link></li>
                            <li><Link to="/Indices" onClick={toggleSubMenu} >indices</Link></li>
                            <li><Link to="/Stock" onClick={toggleSubMenu} >stock</Link></li>
                            <li><Link to="/cryptocurrency" onClick={toggleSubMenu} >crypto currency</Link></li>
                            
                          </ul>
                        )}
                         
                  </li>
                  
                  <li><Link to="/contact">contact </Link></li>
                  <li><Link to="/about">about </Link></li>
              </ul>
              </div>
             
              <a href='' className='cmn-btn  fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1'>login <FontAwesomeIcon icon={faArrowRight} /></a>
              { /*  end  main navbar */}
        </div>
      </div>   
    </div>
  </header>
  
  )
}

export default Header
