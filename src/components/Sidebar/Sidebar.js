import React from 'react'
import './Sidebar.css'

import { SidebarData } from './SidebarData'


function Sidebar() {
  return (
    <div className='Sidebar'>
      <div class="openbtn8" onClick={() => {
        const btn = document.querySelector(".openbtn8");
        const sidebar = document.querySelector(".Sidebar");
        const sidebarList = document.querySelector(".SidebarList");
        btn.classList.toggle("active");
        sidebar.classList.toggle("active");
        sidebarList.classList.toggle("active");
      }}>
        <div class="openbtn-area">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="SidebarList">
        {SidebarData.Home.map((value,key) => {
          return (
                <li
                    key={key}
                    id={window.location.pathname === value.link ? "active" : ""}
                    className='row'
                    onClick={() => {
                    window.location.pathname = value.link;
                }}>
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
