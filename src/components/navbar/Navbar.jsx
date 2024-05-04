import React from 'react'
import '../navbar/navbar.css'
import { IoSearch } from "react-icons/io5"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg fill.svg'
import icon from '../../assets/Header → Link → icon-compare.svg.svg'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function Navbar() {

    return (
        <header className='navbar__wrapper'>
            <div className='container'>
                <nav className="navbar">
                    <NavLink to={'/'} className="navbar__logo">
                        <img src={logo} alt="" />
                    </NavLink>
                    <div className="navbar__search">
                        <input type="text" placeholder='Search for items...' />
                        <button><IoSearch /></button>
                    </div>
                    <div className="navbar__collection">
                        <CiLocationOn />
                            <select className='location' name="Your Location" id="Your Location">
                            <option value="Your Location">Your Location</option>
                            <option value="Your Location">Samarqand darvaza</option>
                            <option value="Your Location">Chorsi</option>
                            <option value="Your Location">Chilonzor</option>
                            <option value="Your Location">Sergili</option>
                            </select>
                        <NavLink to={'/login'} className="navbar__item">
                            <img src={icon} alt="" />
                            <span>Compare</span>
                        </NavLink>
                        <NavLink className="navbar__item">
                            <FaRegHeart />
                            <span>Wishlist</span>
                        </NavLink>
                        <NavLink className="navbar__item">
                            <IoCartOutline />
                            <span>Cart</span>
                        </NavLink>
                        <NavLink className="navbar__item">
                            <IoPersonOutline />
                            <span>Account</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
