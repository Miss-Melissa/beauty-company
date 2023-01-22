import React from 'react'
import { Link } from 'react-router-dom'
import About from '../assets/images/make-up-about.jpg'

function AboutUs() {
    return (
        <div className='about'>
            <div className='main'>
                <img src={About} alt="React Logo" />
                <div className='about-text'>
                    <h1>About Us</h1>
                    <h5>MakeUp<span> & Beauty</span></h5>
                    <p>
                        We are committed to creating a platform where all women can reach their ideal level of beauty.
                        Whether she changes her look depending on her mood or is all about keeping it natural,
                        she’s sure to find the best beauty tips, tricks and products that work just for her.
                        Our goal is to create a personalized, educational, and, most of all,
                        fun experience for all women who are looking to get their daily dose of beauty.
                        We do so by caring deeply about the content we produce, obsessing over new products
                        and by possessing insider access to industry experts and a behind-the-scenes look at some of our
                        favorite beauty brands. Makeup.com is a proud member of the Beauty Company family.
                    </p>
                    <Link to="/products"><button className='start-shop-btn'>Start to Shop</button></Link>
                </div>
            </div>

        </div>)
}

export default AboutUs