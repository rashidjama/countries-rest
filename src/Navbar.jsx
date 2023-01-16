import React from 'react'
import Nav from './Navbar.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Navbar() {
  return (
    <div className='Nav'>
        <div className='Nav__items'>
        <h4>Where in the world?</h4>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <DarkModeOutlinedIcon />
                <span>Dark Mode</span>
        </div>
        </div>
    </div>
  )
}

export default Navbar