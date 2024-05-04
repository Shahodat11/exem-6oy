import React from 'react'
import '../admin/admin.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import FooterTop from "../../components/footerTop/FooterTop";
import FooterBottom from "../../components/footerBottom/FooterBottom";
import main from '../../assets/Main → Section.svg'

function Admin() {
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className="admin__nav-link">
        <div className="admin__card">
          <h4 className='admin__h44'>How can help you ?</h4>
          <h3 className='admin__panel'>Admin panel</h3>
          <p className='admin__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
          <p className='admin__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
          </div>
          <div className="admin__cards">
            <h4 className='cards__h4'>01. Visit Feedback</h4>
            <p className='cards__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
            <h4 className='cards__h4'>01. Visit Feedback</h4>
            <p className='cards__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <div className="admin__cards">
            <h4 className='cards__h4'>01. Visit Feedback</h4>
            <p className='cards__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
            <h4 className='cards__h4'>01. Visit Feedback</h4>
            <p className='cards__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
      </div>
      <img className='admin__img' src={main} alt="" />
      <div className="nav-link11">
        <div className="nav11">
          <h4 className='nav11__h4'>Office</h4>
          <h5 className='nav11__h5'>205 North Michigan Avenue, Suite 810</h5>
          <h5 className='nav11__h5'>Chicago, 60601, USA</h5>
          <h5 className='nav11__h5'>Phone: (123) 456-7890</h5>
          <h5 className='nav11__h5'>Email: contact@Evara.com</h5>
          <button className='button'>View map</button>
        </div>
        <div className="nav11">
          <h4 className='nav11__h4'>Office</h4>
          <h5 className='nav11__h5'>205 North Michigan Avenue, Suite 810</h5>
          <h5 className='nav11__h5'>Chicago, 60601, USA</h5>
          <h5 className='nav11__h5'>Phone: (123) 456-7890</h5>
          <h5 className='nav11__h5'>Email: contact@Evara.com</h5>
          <button className='button'>View map</button>
        </div>
        <div className="nav11">
          <h4 className='nav11__h4'>Office</h4>
          <h5 className='nav11__h5'>205 North Michigan Avenue, Suite 810</h5>
          <h5 className='nav11__h5'>Chicago, 60601, USA</h5>
          <h5 className='nav11__h5'>Phone: (123) 456-7890</h5>
          <h5 className='nav11__h5'>Email: contact@Evara.com</h5>
          <button className='button'>View map</button>
        </div>
      </div>
      <FooterTop/>
      <FooterBottom/>
    </div>
  )
}

export default Admin