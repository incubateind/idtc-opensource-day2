import React from 'react';
import about from './profile.jpg';
import "./ImageSection.css";

function ImageSection(){
    return(
        <div className="image-section">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>Ayoo!<span> Parth Arora residing</span></h4>
                <p>
                    I'm a 20 years old sophomore at TIET, Patiala.
                    Believing in Web dev, Blockchain, Literature and art.
                    Ol' School Hip-Hop and Rock gets me going. Unique Idiot!
                </p>

                <div className="hover-me"><p>Need more Info?</p></div>
                <div className="about-details">

                    <div className="name-details">

                        <p>Full Name</p>
                        <p className="p-margin">: Parth Arora</p>
                    </div>
                    <div className="name-details">
                        <p>Age</p>
                        <p className="p-margin">: 20 years ol'</p>
                    </div>
                    <div className="name-details">
                        <p>University</p>
                        <p className="p-margin">: TIET,Patiala</p>
                    </div>
                    <div className="name-details">
                        <p>Nationality</p>
                        <p className="p-margin">: India</p>
                    </div>
                    <div className="name-details">
                        <p>Languages</p>
                        <p className="p-margin">: English, Hindi, Punjabi</p>
                    </div>
                    <div className="name-details">
                        <p>Address</p>
                        <p className="p-margin">: Hah! ain't a fool</p>
                    </div>

                </div>
                <div className="btn-cv">
                    <button className="btn">Download CV</button>
                </div>
            </div>

        </div>
    );
}

export default ImageSection;