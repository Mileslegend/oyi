import React from 'react'
import './Logo.css'
import {logo} from '../../assets'

const Logo = () => {
  return (
    <div className="flex__center logo__container">
      <div className="logo">
        <img src={logo} alt="logo" />
    </div>
    <h2>Oyi<span className="text__gradient">Rwoth</span></h2>  
    </div>
    
  )
}

export default Logo