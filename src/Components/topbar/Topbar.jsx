import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PreetiFabtech</span>
      </div>
      <div className="topbarRight"><Link className="topbarLink" to="/"><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></Link></div>
    </div>
  )
}
