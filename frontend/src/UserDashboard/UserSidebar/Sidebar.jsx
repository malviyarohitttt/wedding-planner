import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";


function Sidebar() {
  const navItems = [
    {
      path : '/user',
      name : 'Home',
      icon : <i class="fa-solid fa-house"></i>
    },
    {
      path : '/user/myevents',
      name : 'My Events',
      icon : <i class="fa-solid fa-calendar-days"></i>
    },
    {
      path : '/user/guests',
      name : 'Guest',
      icon : <i class="fa-solid fa-user"></i>
    }
  ]

  const logout = ()=>{
    alert('You have been logged out');
  } 
  
  return (
    <>
      <div className="sidebar">
          <div className="d-flex justify-content-center align-items-center logo-div">
              <Link to='/user' className="logo text-white"><span className="icon"><i class="fa-solid fa-user-tie"></i></span>User</Link>
          </div>
          <div className="d-flex justify-content-center" style={{ height: "500px" }}>
              <ul className="d-flex flex-column align-space-between">
                {navItems.map((item)=>
                  <li><Link className="navLinks" to={item.path}><span className="icon">{item.icon}</span>{item.name}</Link></li>
                  )}
                  <li><Link onClick={logout} className="navLinks"><span className="icon"><i class="fa-solid fa-house"></i></span>Logout</Link></li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Sidebar;
