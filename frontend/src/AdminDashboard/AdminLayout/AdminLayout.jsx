import React from 'react'
import './AdminLayout.css'
import AdminSidebar from '../AdminSidebar/Sidebar'


function AdminLayout({ children }) {
    return <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            {<AdminSidebar/>}
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

export default AdminLayout
