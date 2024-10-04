import React from 'react'
import './Services.css'
import { Link } from 'react-scroll'
import { sketch } from '../../assets'
import { services } from '../../data'

const Services = () => {
  return (
    <section id='services' >
        <div className="overlay__div">
            <div className="container">
                <div className="grid">
                    <div className="section__header">
                        <h3 className="title">Our Services</h3>
                        <h3 className="sub__heading">Analyse Your Data With Us</h3>
                        <p className=" muted description">
                        Ready to unlock the power of data? Our expert team offers tailored analytics consultations to guide you from insights to action. Let’s build a data-driven strategy for your next project. Schedule your consultation today!
                        </p>
                        <Link to='contact' className='btn primary' >
                        Book Consultation
                        </Link>
                    </div>
                    <div className="object__contain">
                        <img src={sketch} alt="" />
                    </div>
                </div>
                {/* gird end */}
                <div className="grid services">
                    {
                        services.map((service, index) => (
                            <div className="service" key={index}>
                                <div className="flex top">
                                    <div className="flex__center icon">
                                        {service.icon}
                                    </div>
                                    <h4 className="title">{service.title}</h4>
                                </div>
                                <div className="middle">
                                    <p className="description">{service.description}</p>
                                </div>
                                <div className="flex bottom">
                                    <Link to='contact' className='btn' >Reach Out</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services