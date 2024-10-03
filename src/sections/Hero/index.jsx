import React from 'react'
import './Hero.css'
import Achievement from '../../components/Achievement'
import { Link } from 'react-scroll'
import { FaArrowTurnDown } from 'react-icons/fa6'
import { crane } from '../../assets'


const Hero = () => {
  return (
    <section id='hero' className='blur__effect'>
        <div className="overlay__div">
          <div className="container">
            <div className="column left">
                <div className="hero__content">
                    <h1 className="heading">Building Excellence, Creating Tomorrow</h1>
                    <p className="description">
                    We are dedicated to delivering top-quality construction services with a focus on innovation, sustainability, and client satisfaction. With over 25 years of experience, we bring
expertise and precision to every project, helping shape the
future through excellence in design and craftsmanship.
                    </p>
                </div>
                <Achievement />
                <div className="flex__center buttons__wrapper">
                  <Link to='portifolio' smooth={true} className='btn'> Projects <FaArrowTurnDown />  </Link>
                  <Link to='contact' smooth={true} className='flex__center  btn primary'> Get a Quote <FaArrowTurnDown />  </Link>
                </div>
            </div>
            <div className="column hero__image-container ">
              <img src={crane} alt="" className='object__contain' />
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Hero