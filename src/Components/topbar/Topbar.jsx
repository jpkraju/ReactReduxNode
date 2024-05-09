import React from 'react'
import "./topbar.css"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PreetiFabtech</span>
      </div>
      <div className="topbarRight"><i class="fa fa-user-circle fa-3x" style={{color:"white"}} aria-hidden="true"></i></div>
    </div>
  )
}
