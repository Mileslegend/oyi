import React from 'react'
import './Footer.css'
import Logo from '../../components/Logo'
import { footer } from '../../data'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="overlay__div">
            <div className="container">
                <div className="column">
                    <Logo />
                    <p>
                    Our mission is to build lasting spaces that inspire and uplift, combining quality craftsmanship with innovative solutions to meet
                    the evolving needs of our clients and communities.
                    </p>
                </div>
                {
                    footer.map((foot,index) => (
                        <div className="column" key={index}>
                            <h4 className='title'>{foot.title}</h4>
                            {
                                foot.routes.map((route,index) => (
                                    <a href={route.href} className='route' key={index}>
                                        {route.name}
                                    </a>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="footer__bottom">
                
                <p>Built With love by Muhuan Developers &copy; </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer