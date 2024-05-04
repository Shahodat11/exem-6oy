import React from 'react'
import '../footerBody/footerBody.css'
import footer1 from '../../assets/Footer (1).svg'
import footer2 from '../../assets/Footer (2).svg'
import footer3 from '../../assets/Footer (3).svg'
import footer4 from '../../assets/Footer (4).svg'
import footer5 from '../../assets/Footer (5).svg'

function FooterBody() {
  return (
    <div className='container'>
        <div className="nav-link2">
            <img className='imgg' src={footer1} alt="" />
            <img className='imgg' src={footer2} alt="" />
            <img className='imgg' src={footer3} alt="" />
            <img className='imgg' src={footer4} alt="" />
            <img className='imgg' src={footer5} alt="" />
        </div>
    </div>
  )
}

export default FooterBody