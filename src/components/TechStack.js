import React from "react";

const TechStack = (props) => {
  let resumeData = props.resumeData;

  return (
    <section className="interests pt-5 pb-5" id="skills">
      <h1 className="display-4">Tech I'm familiar with</h1>
      <h1 className="bold-text bg-text">Tech Stack</h1>
      <div className="row pt-5">
        {resumeData.techStack &&
          resumeData.techStack.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0" key={index}>
                <div className="icon-box">
                  <img
                    className="tech-icon"
                    src={`${process.env.PUBLIC_URL}/images/icons/${item.path}`}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TechStack;
