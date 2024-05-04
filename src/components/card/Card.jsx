import React from 'react'
import '../card/card.css'
import card1 from '../../assets/Section (1).svg'
import card2 from '../../assets/Section (2).svg'
import card3 from '../../assets/Section (3).svg'

function Card() {
  return (
    <div className='container'>
        <div className="card">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
        </div>
        <div className="nav1">
            <h2>Popular Products</h2>
            <div className="nav2">
                <h5>All</h5>
                <h5>Milks & Dairies</h5>
                <h5>Coffes & Teas</h5>
                <h5>Pet Foods</h5>
                <h5>Meats</h5>
                <h5>Vegetables</h5>
                <h5>Fruits</h5>
            </div>
        </div>
    </div>
  )
}

export default Card