import React from 'react'
import './SocialHandles.css'
import { socialHandles } from '../../data'

const SocialHandles = () => {
  return (
    <div className='flex social__handles'>
        {socialHandles.map((handle,index) => (
            <a 
            href={handle.link} 
            target='_blank' 
            className='flex__center icon'
            key={index}>
                {handle.icon}
            </a>
        ))}
    </div>
  )
}

export default SocialHandles