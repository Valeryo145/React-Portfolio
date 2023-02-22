import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="container-fluid about">
      <div>
        <br />
        <br />
      </div>
      <h1 className="heading">About</h1>

      <p className="text-centered">
        University of Denver -- Denver University Coding Bootcamp Graduated
      </p>
      <div class="row align-items-start">
        <div class="col"></div>
        <div class="col">
          <img src="./images/IMG_4144.jpg" className="img-responsive" height="100px"/>
        </div>
        <div class="col"></div>
      </div>

      <p className="text-centered">
        HELLO! I'm Valeryo, I made the decision to become a Full Stack Develop a
        little while ago. I believe with the leadership skill that I can apply
        to this industry can create outstanding results. The combination of hard
        work, practice, patience, good communication, and attention to details
        is going to make my journey epic. That being said, while becoming a Full
        Stack MERN Developer my goals and believes in this industry has been
        growing. I know that every chance that I will get will be taken to
        another level of success. The Denver Bootcamp journey was very
        beneficial. Working with other kind of(mindset)- people and adapt to
        differ styles of code and wisdom has been great! I am excited more than
        ever!!
      </p>

      <div>
        <br />
        <hl />
        <br />
      </div>

      <h1 className="heading"> Skills: Front & Back End </h1>
      <ul class="twocolumns">
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Handlebars</li>
        <li>React</li>
        <li>jQuery</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Sequelize</li>
      </ul>

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
