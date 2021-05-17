import React from 'react'
import Title from "../Title";
import ImagSection from "../ImageSection"
import SkillSection from "../SkillSection";
import ServiceSection from "../ServicesSection";
import design from "../design.svg";

function About(){
    return(
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImagSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skills-container">
                <SkillSection skill={'JavaScript'} progress={'87%'} width={'87%'} />
                <SkillSection skill={'React.JS'} progress={'69%'} width={'69%'} />
                <SkillSection skill={'CSS'} progress={'76%'} width={'76%'} />
                <SkillSection skill={'C++'} progress={'79%'} width={'79%'} />
                <SkillSection skill={'Python'} progress={'52%'} width={'52%'} />
                <SkillSection skill={'Blockchain Dev'} progress={'55%'} width={'55%'} />
            </div>
            <Title title={'Flipped Side'} span={'Flipped Side'} />
            <div className="service-container">
                <ServiceSection image={design}/>
            </div>
        </div>
    );
}
export default About;