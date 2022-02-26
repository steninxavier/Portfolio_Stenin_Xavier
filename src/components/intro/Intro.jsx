import React from "react";
import "./intro.css";
import myimage from "../../img/stenincover.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <div className="social-links">
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/stenin-xavier-606383b7/"
              >
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/farbige-linkedin-logoikone-hohe-aufl%C3%B6sung-streifen-logo-mit-wei%C3%9Fem-hintergrund-datei-des-vektors-eps-f%C3%BCr-zus%C3%A4tzliche-download-175765829.jpg"
                  alt="Linkedin"
                  className="linkedinImage"
                />
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/steninxavier">
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Github"
                  className="githubImage"
                />
              </a>
            </div>
          </div>
          <h2 className="intro-wish"> Hello, My name is </h2>
          <h1 className="intro-name">STENIN XAVIER</h1>
          <div className="intro-title">
            <div className="intro-title-item">FRONT-END DEVELOPER</div>
          </div>
          <p className="intro-desc">
            <b>
              {" "}
              I am a passionate front-end developer with relevant experience and
              have unending enthusiasm for solving problems.
            </b>
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={myimage} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
