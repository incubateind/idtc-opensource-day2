import React from 'react';
import "./Title.css";

function Title({title,span}){
    return(
        <div className="TitlePage">
            <h3>
                {title}
                <span> {span}</span>
            </h3>

        </div>
    );
}

export default Title;