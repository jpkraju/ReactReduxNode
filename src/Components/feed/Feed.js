import { Outlet } from "react-router-dom";
import React from 'react'
import "./feed.css"
export default function Feed() {
  return (
    <div className="feed">
      <Outlet />
    </div>
  )
}
