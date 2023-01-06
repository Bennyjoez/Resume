import React from "react";


export default function App() {
  const [display, setDisplay] = React.useState(false)

  function showCert() {
    //display the cert of the clicked link
  }

  return (
    <div className="container">
      <h1 className="name">BENSON NJUGUNA KAMAU</h1>
      <h3>Front-end Developer</h3>
      <h4>njugunab655@gmail.com</h4>
      <h4>+254703599801</h4>
      <div className="social">
        <a href="https://twitter.com/bennyjoezz"><i class="fa-brands fa-square-twitter"></i></a>
        <a href="mailto:njugunab655@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/benson-njuguna-008146242/"><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <h2 className="section-heading">
        Summary
      </h2>
      <p className="description">
        Self-taught software developer with experience in front-end web development and a passion for creating innovative and user-friendly applications. Proficient in HTML, CSS, JavaScript, and React Js, with a strong focus on best practices and clean, readable code. Familiar with ChatGPT and other artificial intelligence and natural language processing technologies. Currently enrolled in a Web3 Development Bootcamp at Alchemy University, with plans to further my education through a full-stack developer program at Microverse and finish my full-stack development certification in 2023. Seeking a software developer internship or entry-level position to gain practical experience and contribute my skills to a team.
      </p>
      <h2 className="section-heading">Skills</h2>
      <ul>
        <li>Front-end web development <span className="languages-used">(HTML, CSS, JavaScript, React Js)</span></li>
        <li>Artificial intelligence and natural language processing technologies (e.g. ChatGPT)</li>
        <li>Bootstrap, Sass, VS Code, Git</li>
        <li>Team player with strong communication skills</li>
        <li>Passionate about learning and helping others in the development field</li>
      </ul>
      <h2 className="section-heading">Education</h2>
      <ul>
        <li>FreeCodeCamp Bootcamp (2022): Completed the Responsive Web Design, JavaScript Algorithms and Data Structures course to learn the foundations of web development.</li>
        <li>Scrimba Bootcamp (2022): Completed the React course to learn how to build interactive front-end applications using the React library.</li>
        <li>Web3 Development Bootcamp, Alchemy University (December 2022-present)</li>
      </ul>
      <h2 className="section-heading">Certifications</h2>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/certification/bennyjoez/responsive-web-design">freeCodeCamp: Responsive Web Design</a>
          <img src="/images/responsive-web.png" alt="Responsive web certification" className="certs" />
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/bennyjoez/javascript-algorithms-and-data-structures">freeCodeCamp: JavaScript Algorithms and Data Structures</a>
          <img src="/images/javascript-algorithims-data-structures.png" alt="Javascript certification" className="certs" />
        </li>
        <li>
          Full Stack Web Development Certification, Microverse (planned for 2023)
        </li>
      </ul>
      <h2 className="section-heading" >Projects</h2>
      <ul className="projects">
        <li className="project-tile" >
          <a href="https://ben-portfolio-website.netlify.app/"><span className="project-tile-heading" >Personal portfolio website <span className="languages-used">(HTML, CSS, JavaScript)</span></span></a> <br /> 
          Created a personal portfolio website to showcase my skills and projects. Utilized responsive design techniques to ensure that the website looked great on all devices.
        </li>
        <li className="project-tile" >
          <a href="https://todo-app-by-ben.netlify.app/"><span className="project-tile-heading" >Todo list app <span className="languages-used">(HTML, CSS, JavaScript)</span></span></a> <br />
          Built a todo list app to practice using HTML, CSS, and JavaScript and creating interactive front-end elements.
        </li>
        <li className="project-tile" >
          <a href="https://quizzical-scrimb.netlify.app/"><span className="project-tile-heading" >Quizzical web app <span className="languages-used">(HTML, CSS, JavaScript, React Js)</span></span></a> <br /> 
          Created a quizzical web app using React Js to allow users to test their knowledge on various topics.
        </li>
        <li className="project-tile" >
          <a href="https://atril-ben-weather-app.netlify.app/"><span className="project-tile-heading" >Weather app <span className="languages-used">(HTML, CSS, JavaScript)</span></span></a> <br /> 
          Built a weather app in collaboration with a partner to practice working in a team and utilizing APIs
        </li>
      </ul>
      <h2 className="section-heading" >Volunteer Work</h2>
      <ul>
        <li>Participated in the IT department of my local church, assisting with troubleshooting and maintaining computer systems.</li>
        <li>Mentored local youths interested in software development, helping them to understand the fundamentals of web development and assisting them with their projects.</li>
      </ul>
    </div>
  )
}