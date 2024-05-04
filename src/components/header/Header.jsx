import React from 'react'
import '../header/header.css'
import header from '../../assets/Link (2).svg'

function Header() {
  return (
    <div className='container'>
        <div className="header__nav-links">
            <img src={header} alt="" />
            <ul className="nav-items" id="navbar-responsive">
            <select className='select' name="Home" id="Home">
                <option value="home">Home</option>
                <option value="home">Home</option>
            </select>
            <select className='select' name="About" id="About">
                <option value="About">About</option>
                <option value="About">About</option>
            </select>
            <select className='select' name="Shop " id="Shop ">
                <option value="Shop ">Shop </option>
                <option value="Shop ">Shop </option>
            </select>
            <select className='select' name="Vendors" id="Vendors">
                <option value="Vendors">Vendors</option>
                <option value="Vendors">Vendors</option>
            </select>
            <select className='select' name="Mega menu" id="Mega menu">
                <option value="Mega menu">Mega menu</option>
                <option value="Mega menu">Mega menu</option>
            </select>
            <select className='select' name="Blog" id="Blog">
                <option value="Blog">Blog</option>
                <option value="Blog">Blog</option>
            </select>
            <select className='select' name="Pages" id="Pages">
                <option value="Pages">Pages</option>
                <option value="Pages">Pages</option>
            </select>
            <select className='select' name="Contact" id="Contact">
                <option value="Contact">Contact</option>
                <option value="Contact">Contact</option>
            </select>
          </ul>
        </div>
    </div>
  )
}

export default Header