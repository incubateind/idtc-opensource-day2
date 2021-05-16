import React from "react";

const ResumeData = (props) => {
  return (
    <div className="py-4">
      <div className="desc">
        <h4>{props.title}</h4>
        <p className="mt-3">
          <a href={props.url} target="_blank" rel="noreferrer">
            {props.organizationName}
          </a>
        </p>
      </div>
      <div>
        <p>{props.duration}</p>
      </div>
      <div>
        {props.description &&
          props.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </div>
    </div>
  );
};

export default ResumeData;
