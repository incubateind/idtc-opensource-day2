import React from "react";

const ContactMe = (props) => {
  let resumeData = props.resumeData;

  return (
    <section id="contact">
      <h1 className="display-4 mt-5">Let's Talk</h1>
      <h1 className="bold-text bg-text">Contact</h1>
      <div className="text-left">
        <div className="pt-5">
          <h2 className="mb-5">Want to connect? My inbox is always open! </h2>
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
      <div className="mt-5 mb-5 text-center">
        <h4>May the Source be with you 🚀</h4>
      </div>
    </section>
  );
};

export default ContactMe;
