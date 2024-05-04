import React from 'react'
import '../cards/cards.css'
import fruit1 from '../../assets/div.card-2.svg'
import fruit2 from '../../assets/div.card-2 (1).svg'
import fruit3 from '../../assets/div.card-2 (2).svg'
import fruit4 from '../../assets/div.card-2 (3).svg'
import fruit5 from '../../assets/div.card-2 (4).svg'
import fruit6 from '../../assets/div.card-2 (5).svg'
import fruit7 from '../../assets/div.card-2 (6).svg'
import fruit8 from '../../assets/div.card-2 (7).svg'
import fruit9 from '../../assets/div.card-2 (8).svg'
import fruit10 from '../../assets/div.card-2 (9).svg'

function Cards() {
  return (
    <div className='container'>
        <div className="nav-links">
            <div className="nav">
                <h2>Featured Categories</h2>
                <h5>Cake & Milk</h5>
                <h5>Coffes & Teas</h5>
                <h5>Pet Foods</h5>
                <h5>Vegetables</h5>
            </div>
            <div className="cards">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
                <img src={fruit3} alt="" />
                <img src={fruit4} alt="" />
                <img src={fruit5} alt="" />
                <img src={fruit6} alt="" />
                <img src={fruit7} alt="" />
                <img src={fruit8} alt="" />
                <img src={fruit9} alt="" />
                <img src={fruit10} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cards