import React, { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import Home from '../../pages/Home/Home';
import './Layout.css';
import Menus from '../Menus/Menus';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sidebar-section ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className={ isSidebarOpen ? "sidebar-toggle sidebar" :"sidebar"}>
          <div className="sidebar-toggle-icons">
           
            <p onClick={handleToggle}>
              {isSidebarOpen ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />}
            </p>
          </div>
          <Menus isSidebarOpen ={isSidebarOpen}/>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
