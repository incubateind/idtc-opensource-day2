import React from 'react';
import "./servicesSection.css"

function ServicesSection({image}){
    return(
        <div className="services-section">
            <div className="service">
               <div className="service-content">
                   <img src={image} alt="" className="ser-image"/>
                   <h5 className="s-title"></h5>
                   <p className="s-text">
                       Founder & President of the Literary, Art, and Open Mic club,
                       "The Allegory". Core-tech member of Youth Against Rape.
                       Block-Chain Enthusiast and a revolutionist.

                   </p>
               </div>
            </div>
        </div>
    );
}

export default ServicesSection;