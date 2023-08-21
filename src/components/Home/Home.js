import React from 'react'

import './Home.css'
import Button from '@mui/material/Button';

import Sidebar from '../Sidebar/Sidebar'

function Home() {
  return (
    <main>
      <Sidebar />
      <div className='Btns'>
        <Button variant="contained" onClick={() => {
          window.location.pathname = "/game";
        }}>部屋を立てる</Button>
        <Button variant="contained" onClick={() => {
          window.location.pathname = "/game";
        }}>部屋に参加する</Button>
      </div>
    </main>
  )
}

export default Home
