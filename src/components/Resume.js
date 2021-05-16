import React from "react";
import ResumeData from "./ResumeData";

const Resume = (props) => {
  let resumeData = props.resumeData;

  return (
    <React.Fragment>
      <section id="experience">
        <h1 className="display-4 mt-5">Education</h1>
        <h1 className="bold-text bg-text">Academics</h1>
        <ResumeData
          title="Bachelor's Degree in Computer Science & Engineering"
          organizationName="GIET University, Gunupur"
          url="https://giet.edu"
          duration="2018 - 2022"
        />
        <h1 className="display-4 mt-5">Experience</h1>
        <h1 className="bold-text bg-text">Profile</h1>
        <div className="row d-flex">
          <div className="col-md-10">
            <div className="mt-3">
              {resumeData.workExperiences &&
                resumeData.workExperiences.map((item, index) => {
                  return (
                    <ResumeData
                      key={index}
                      title={item.title}
                      organizationName={item.organizationName}
                      url={item.url}
                      duration={item.duration}
                      description={item.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="display-4 mt-5">Projects</h1>
        <h1 className="bold-text bg-text">Innovation</h1>
        <br />
        <h3>
          See my projects on GitHub&nbsp;
          <a
            className="button button-a button-big button-rouded"
            style={{ color: "#fff" }}
            href="https://github.com/Rishi-121"
            target="_blank"
            rel="noreferrer"
          >
            Click Here
          </a>
        </h3>
      </section>
      <section>
        <h1 className="display-4 mt-5">Volunteering</h1>
        <h1 className="bold-text bg-text">Community</h1>
        <div className="row d-flex">
          <div className="col-md-10">
            <div className="mt-3">
              {resumeData.voluntaryExperiences &&
                resumeData.voluntaryExperiences.map((item, index) => {
                  return (
                    <ResumeData
                      key={index}
                      title={item.title}
                      organizationName={item.organizationName}
                      url={item.url}
                      duration={item.duration}
                      description={item.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="display-4 mt-5">Awards</h1>
        <h1 className="bold-text bg-text">Honours</h1>
        <div className="row d-flex">
          <div className="col-md-10">
            <div className="mt-3">
              {resumeData.achievements &&
                resumeData.achievements.map((item, index) => {
                  return (
                    <ResumeData
                      key={index}
                      title={item.title}
                      organizationName={item.organizationName}
                      url={item.url}
                      duration={item.achievedOn}
                      description={item.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Resume;
