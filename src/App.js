import React from "react";
import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Articles from "./components/Articles";
import ContactMe from "./components/ContactMe";
import resumeData from "./resumeData";

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light mb-1">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/1IPfH8gFs0Xv4zu3jjCSzQILykmhcKpU3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="container" id="home">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <TechStack resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Articles resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
      </div>
    </React.Fragment>
  );
};

export default App;
