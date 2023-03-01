import React, { useState, useEffect } from 'react';

function Skills() {

  useEffect(() => {
  }, [])

  return (
    <section>
      <div className='skillsContant' id="skills">
        <h4>Skills</h4>
        <ul>
          <li><span>Languages and Frameworks</span>
            CSS / CSS3 / SCSS / HTML / HTML5 / Bootstrap5 / Material UI /
            Tailwind CSS / React-JS / React-Native / Redux / Angular-JS+2 / NPM /
            JavaScript / jQuery / Ajax / GSAP-Green Sock / WordPress
          </li>
          <li><span>Databases</span>MySQL / Node-JS / Rest API </li>
          <li><span>Development Tools</span>
            Adobe-XD / Figma / Adobe Photoshop / VS Code. / Github / Gitlab / Postman /
            Jira / Open-Project / Trello / Microsoft Teams.</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;



