import React from "react";

const About = (props) => {
  let resumeData = props.resumeData;

  return (
    <section className="mt-4 mb-4" id="about">
      <h4 className="display-4">A little about me,</h4>
      <div className="row">
        <div className="col-lg-6 wrap text-left">
          <div className="about-desc">
            <h1 className="bold-text">About</h1>
            <div className="pt-5">
              <h2 className="mb-5 p-3">Hello 😄!</h2>
              <p className="p-3">{resumeData.aboutme}</p>

              <ul className="social-links list-unstyled mt-4">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.url}>
                          <ion-icon name={item.name}></ion-icon>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wrap align-content-center">
          <div className="row mt-5 flex-column">
            <div className="col-md-8 ml-4">
              <h2 className="mb-3">My Skills</h2>
            </div>

            {resumeData.skills &&
              resumeData.skills.map((item, index) => {
                return (
                  <div className="col-md-6 m-4" key={index}>
                    <div className="progress-wrap">
                      <h4>{item.name}</h4>
                      <div className="progress progress-style">
                        <div
                          className="progress-bar color-1"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
