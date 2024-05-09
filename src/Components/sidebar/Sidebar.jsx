import { Link } from "react-router-dom";
import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className='sidebarList'>
          <div className='sidebarListItem'>
            <Link className="link" to="/">Home</Link>
          </div>
          <div className='sidebarListItem'>
            <Link className="link" to="/products">Products</Link>
          </div>
          <div className='sidebarListItem'>
            <Link className="link" to="/contact">Inventory</Link>
          </div>
          <div className='sidebarListItem'>
            <Link className="link" to="/blogs">Reports</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
