import React from 'react'
import '../typography.css';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';

function HomePage(){

    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hell O! Address me as
                    <span> Parth Arora</span>
                </h1>
                <p className="h-sub-text">
                    I am a Front-end Web and BlockChain developer,
                    I've worked on many projects based on those concepts
                    and have also tried to learn more such Libraries and frameworks.
                    I'm founder & President of the Literary, Arts, and Open Mic club, "The Allegory".
                    Also a poet/rapper/writer,and I've been recognised by The Game and Sasha Sloan
                    themselves and got some sponsorships too!
                </p>
                <div className="icons">
                   <Link className="icon-holder">
                       <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                   </Link>
                       <Link className="icon-holder">
                       <FontAwesomeIcon icon={faGithub} className="icon gh" />
                       </Link>
                           <Link className="icon-holder">
                       <FontAwesomeIcon icon={faLinkedinIn} className="icon li" />
                           </Link>


                </div>
            </header>

        </div>
    );

}

export default HomePage;