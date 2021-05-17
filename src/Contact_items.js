import React from 'react';

function Contact_items({icon,text,title}){
    return(
        <div className="contact-main">
            <div className="contact-items">
                <img src={icon}/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text}</p>
                </div>

            </div>
        </div>
    );
}

export default Contact_items;