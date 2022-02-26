import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1 className="about-title">About Me</h1>
        <h4 className="aboutMe">
          Welcome to my world of development. I am a self-taught developer and I
          have started my career as a freelancer. I had been creating WordPress
          websites with SEO and building websites with HTML CSS and javascript.
          I have completed my bachelor's in computer science and I came to
          Germany in 2019 to do my master's in business administration to gain
          some managerial skills. After my master's thesis, I have joined a
          company as a web developer intern for 3 months. After my internship, I
          have realised that I have to explore more in frontend development. I
          have started building projects and learning new skills. I have learned
          javascript frameworks, databases and some backend technologies as
          well. I have been creating new projects day by day. Now I have nearly
          1.5 years experience in frontend development technologies. So I would
          like to work with a team to explore and improve my skills as well
          which help me to become a perfect developer. I am looking
          for new challenges and I am looking forward to working with you.
        </h4>
      </div>
      <div className="about-right">
        <h1>Tech Stack</h1>
        <ul className="skills">
          <li className="html">
            <h4>HTML 5</h4>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="img-html"
            />
          </li>
          <li className="css">
            <h4>CSS 3</h4>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
              alt="CSS 3"
              className="img-css"
            />
          </li>
          <li className="Javascript">
            <h4>Javascript ES6</h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPovSNKvrai1_gZuVAQ6S3aEdf-dX6eXoN26wtQEpZGAAk6YS6_PLCOl5ji1k3nw5O40&usqp=CAU"
              alt="Javscript"
              className="img-javascript"
            />
          </li>
          <li className="Bootstrap">
            <h4>Bootstrap</h4>
            <img
              src="https://www.duomimikry.de/wp-content/uploads/2016/03/bootstrap-logo.jpg"
              alt="bootstrap"
              className="img-bootstrap"
            />
          </li>
          <li className="materialui">
            <h4>Material UI</h4>
            <img
              src="https://mui.com/static/logo.png"
              alt="materialui"
              className="img-materialui"
            />
          </li>
          <li className="tailwindcss">
            <h4>Tailwind CSS</h4>
            <img
              src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
              alt="tailwindcss"
              className="img-tailwindcss"
            />
          </li>
          <li className="reactjs">
            <h4>React Js</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="reactjs"
              className="img-reactjs"
            />
          </li>
          <li className="redux">
            <h4>Redux</h4>
            <img
              src="data:image/png;base64,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"
              alt="Redux"
              className="img-redux"
            />
          </li>
          <li className="next Js">
            <h4>Next Js</h4>
            <img
              src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
              alt="nextjs"
              className="img-nextjs"
            />
          </li>
          <li className="nodejs">
            <h4>Node Js</h4>
            <img
              src="https://png.pngitem.com/pimgs/s/168-1680234_nodejs-logo-svg-hd-png-download.png"
              alt="nodejs"
              className="img-nodejs"
            />
          </li>
          <li className="expressjs">
            <h4>Express Js</h4>
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="expressjs"
              className="img-expressjs"
            />
          </li>
          <li className="mongodb">
            <h4>Mongo DB</h4>
            <img
              src="data:image/png;base64,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"
              alt="mongodb"
              className="img-mongodb"
            />
          </li>
          <li className="postgresql">
            <h4>PostgreSQL</h4>
            <img
              src="https://www.itzgeek.com/wp-content/uploads/2012/03/PostgreSQL-logo.gif"
              alt="postgresql"
              className="img-postgresql"
            />
          </li>
          <li className="webpack">
            <h4>Webpack</h4>
            <img
              src="data:image/png;base64,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"
              alt="webpack"
              className="img-webpack"
            />
          </li>

          <li className="styledcomponents">
            <h4>Styled Components</h4>
            <img
              src="https://miro.medium.com/max/318/1*p1TndLk3UsGPBsM7qHPZIw.png"
              alt="styledcomponents"
              className="img-styledcomponents"
            />
          </li>
          <li className="wordpress">
            <h4>Wordpress</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png"
              alt="wordpress"
              className="img-wordpress"
            />
          </li>
          <li className="jest">
            <h4>Jest</h4>
            <img
              src="data:image/png;base64,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"
              alt="jest"
              className="img-jest"
            />
          </li>
          <li className="typescript">
            <h4>Typescript</h4>
            <img
              src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
              alt="typescript"
              className="img-typescript"
            />
          </li>
          <li className="github">
            <h4>Github</h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
              className="img-github"
            />
          </li>
          <li className="vscode">
            <h4>VScode</h4>
            <img
              src="data:image/jpeg;base64,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"
              alt="vscode "
              className="img-vscode"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;