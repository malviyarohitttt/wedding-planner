import React from 'react'
import './UserLayout.css'
import UserSidebar from '../UserSidebar/Sidebar'

function UserLayout({ children }) {
    return <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            {<UserSidebar/>}
          </div>
          <div className="col-md-10">
          <div className="contant">
            {children}
          </div>
          </div>
        </div>
      </div>
    </>
  }

export default UserLayout
