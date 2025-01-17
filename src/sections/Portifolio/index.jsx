import React from 'react'
import './Portifolio.css'
import { portfolio } from '../../data'

const Portifolio = () => {
  return (
    <section id='portfolio'>
      <div className="container">
        <div className="section__header">
        <h3 className="title">Our Portfolio</h3>
          <h3 className="sub__heading">Innovative Solutions, Sustainable Cooking</h3>
          <p className="description">
          Explore our portfolio to see how we turn visions into high-quality, inspiring spaces, from raw data to meaningful information.
          </p>
        </div>
        <div className="portifolio__container">
          {
            portfolio.map((item,index) => (
              <div className="flex portifolio" key={index}>
                <div className="image__container">
                  <img src={item.image} alt="" />
                </div>
                <div className="details">
                  <h4 className="title">{item.title}</h4>
                  <p className="line__clamp__2 description">{item.description}</p>
                  <div className="flex date__category">
                    <p className="date">{item.date}</p>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portifolio