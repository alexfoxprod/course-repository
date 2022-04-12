import React from 'react'
import {Outlet, NavLink} from "react-router-dom"
export const Layout = () => {
  return (
    <div className="container">
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/auth">Login / Logout </NavLink>
    </header>
    <Outlet/> 
  </div>
  )
}

export default Layout;
