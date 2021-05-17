import React from 'react';
import "../Contact.css";
import Contact_items from "../Contact_items";
import Whatsapp from "../phone.svg";
import email from "../emailme.svg";
import location from "../location.svg";
import Title from "../Title";

function Contact(){
    return(
       <div>
           <div className="Title">
               <Title title={'Contact Me'} span={'Contact Me'} />
           </div>

               <div className="contact-page">
                   <div className="map-section">
                       <iframe
                           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13724.79001967366!2d76.76827699999998!3d30.684718649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621174092420!5m2!1sen!2sin"
                           width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                   </div>
                   <div className="contact-sec">

                       <Contact_items icon={Whatsapp} text={'+91-9915626511'} title={'WhatsApp'} />
                       <Contact_items icon={email} text={'parora4_be19@thapar.edu'} title={'E-mail'}/>
                       <Contact_items icon={location} text={'Chandigarh, India'} title={'Location'} />



               </div>
           </div>
       </div>
    );
}

export default Contact;