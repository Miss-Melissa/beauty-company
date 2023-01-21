import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarked, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='sec aboutus'>
                    <h2> Be in the know</h2>
                    <p>
                        Promotions, new products and sales. Directly to your inbox.
                    </p>

                    <Link to=""><FaFacebook /></Link>
                    <Link to='/'><FaInstagram /></Link>
                    <Link to='/'><FaLinkedin /></Link>
                    <Link to='/'><FaTwitter /></Link>
                    <Link to='/'><FaYoutube /></Link>
                </div>

                <div className='sec quickLinks'>
                    <h2>QuickLinks</h2>

                    <Link to='/'>Home</Link>
                    <Link to='/Prouducts'>Products</Link>
                    <Link to='/aboutus'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>



                <div className='sec contact'>
                    <h2>Contact us</h2>

                    <p >
                        <FaMapMarked /> <span>Stockholm</span>
                    </p>
                    <p>
                        <FaPhone /> <span>+46704644440</span>
                    </p>

                    <p>
                        <FaEnvelope /> <span>contact@beautycompany.se</span>
                    </p>

                    <span className='footer-companyname'>
                        © <strong>  <span className="spanOne">Beauty</span><span className='spanTwo'>Company</span></strong>
                        <p className="footer-p">All rights reserved  - 2022</p>
                    </span>

                </div>

            </div>
        </div >)
}









export default Footer