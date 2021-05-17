import React from 'react';
import "./SkillSection.css";

function SkillSection({skill,progress,width}){
    return(
        <div className="skill-section">
            <div className="skill-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress-bar">
                            <div className="inner-progress" style={{width}}></div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SkillSection