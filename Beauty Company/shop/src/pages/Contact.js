import React from 'react'
import ContactImg from './../images/contact-img.jpeg'

function Contact() {
    return (
        <div className='contact'>

            <div className='contact-form'>
                <h1>Contact <span>Us</span></h1>

                <h3>Adres</h3>
                <p>Ringvägen 52
                    <br></br>
                    118 67 Stockholm</p>

                <h3>Phone</h3>
                <p>+46704644440</p>

                <h3>E-Mail</h3>
                <p>contact@beautycompany.se</p>

                <form>
                    <input type="name" className='input-contact' placeholder="Your Name" required />
                    <input type="email" className='input-contact' placeholder="E-mail" required />
                    <input type="text" className='input-contact' placeholder="Write a Subject" required />
                    <textarea name=""  className='input-contact' cols="30" rows="10" placeholder="Your Message" required> </textarea>
                    <input type="submit"  value="Submit" className='contact-btn' />
                </form>
            </div>

            <div className='contact-image'>
            <img src={ContactImg} alt="contact" />
            </div>

        </div>
    )
}

export default Contact