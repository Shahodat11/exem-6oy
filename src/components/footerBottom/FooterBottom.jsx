import React from 'react'
import '../footerBottom/footerBottom.css'
import footerBottom1 from '../../assets/Footer (6).svg'
import footerBottom2 from '../../assets/Footer (7).svg'

function FooterBottom() {
  return (
    <div className='container'>
        <div className="nav-link3">
            <img src={footerBottom2} alt="" />
            <div className="nav3">
                <h6 className='h6'>Company</h6>
                <h3>About Us</h3>
                <h3>Delivery Information</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms & Conditions</h3>
                <h3>Contact Us</h3>
                <h3>Support Center</h3>
                <h3>Careers</h3>
            </div>
            <div className="nav3">
                <h6 className='h66'>Account</h6>
                <h3>Sign In</h3>
                <h3>View Cart</h3>
                <h3>My Wishlist</h3>
                <h3>Track My Order</h3>
                <h3>Help Ticket</h3>
                <h3>Shipping Details</h3>
                <h3>Compare products</h3>
            </div>
            <div className="nav3">
                <h6 className='h66'>Corporate</h6>
                <h3>Become a Vendor</h3>
                <h3>Affiliate Program</h3>
                <h3>Farm Business</h3>
                <h3>Farm Careers</h3>
                <h3>Our Suppliers</h3>
                <h3>Accessibility</h3>
                <h3>Promotions</h3>
            </div>
            <div className="nav3">
                <h6 className='h66'>Popular</h6>
                <h3>Milk & Flavoured Milk</h3>
                <h3>Butter and Margarine</h3>
                <h3>Eggs Substitutes</h3>
                <h3>Marmalades</h3>
                <h3>Sour Cream and Dips</h3>
                <h3>Tea & Kombucha</h3>
                <h3>Cheese</h3>
            </div>
            <img src={footerBottom1} alt="" />
        </div>
    </div>
  )
}

export default FooterBottom