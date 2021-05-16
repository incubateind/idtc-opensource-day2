import React from "react";

const Header = (props) => {
  let resumeData = props.resumeData;

  return (
    <section className="landing">
      <div className="row vertical-center">
        <div className="col-lg-8 text-left pb-5">
          <h1 className="display-3">{resumeData.name}</h1>
          <p className="pl-2">
            Backend Dev ▪ Graphics Designer
          </p>
        </div>
        <div className="col-lg-4 text-center pb-5 rounded-circle">
          <img
            className="img-fluid rounded-circle"
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
