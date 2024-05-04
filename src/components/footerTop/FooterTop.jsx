import React from 'react'
import footer from '../../assets/Footer.svg'
import '../footerTop/footerTop.css'

function FooterTop() {
  return (
    <div className='container'>
        <img className='footer' src={footer} alt="" />
    </div>
  )
}

export default FooterTop