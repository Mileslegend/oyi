import React from 'react'
import './Contact.css'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="overlay__div">
            <div className="container">  
                <div className="flex left__container">
                    <div className="contact__info__wrapper">
                        {/* Contact Info */}
                        <div className="flex contact__info">
                            <div className="flex__center icon">
                                <MdOutlineAlternateEmail />
                            </div>
                            <div className="details">
                                <h4>Email Us</h4>
                                <p className="muted">Fast and Reliable Support</p>
                                <p>
                                    <a href="mailto:mileslegend7@gmail.com">mileslegend7@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        {/* Contact Info End*/}

                        {/* Contact Info */}
                        <div className="flex contact__info">
                            <div className="flex__center icon">
                                <FaLocationCrosshairs />
                            </div>
                            <div className="details">
                                <h4>Our Location</h4>
                                <p className="muted">Come at Our Offices</p>
                                <p>
                                    1 <sup>st</sup> Avenue, Kampala Uganda
                                </p>
                            </div>
                        </div>
                        {/* Contact Info End*/}

                        {/* Contact Info */}
                        <div className="flex contact__info" >
                            <div className="flex__center icon">
                                <FiPhoneCall />
                            </div>
                            <div className="details">
                                <h4>Phone Number</h4>
                                <p className="muted">Give us a call by tapping on this number </p>
                                <p onClick={() => window.location.href = 'tel:+256759060525'}>
                                    +256759060525
                                </p>
                            </div>
                        </div>
                        {/* Contact Info End*/}
                    </div>
                </div>
                <form className='form' >
                    <div className="form__top">
                        <h3 className="sub__heading">Get in Touch</h3>
                        <p className="muted">
                        Have a project in mind or need expert advice? We're here to
                        help! Reach out to our team for personalized consultations, inquiries, or to start your next big project today.
                        </p>
                    </div>
                    <div className="form__middle">
                        <input type='text' placeholder='Full Name' name='fullName' className='control'/>
                        <input type='email' placeholder='Email Address' name='email' className='control'/>
                        <input type='tel' placeholder='Phone Number' name='phoneNumber' className='control'/>
                        <textarea name='message' placeholder='Tell us your thoughouts' className='control'></textarea>
                        <div className="form__bottom">
                            <button type='button' className='btn primary'  >Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact