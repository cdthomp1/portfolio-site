

function App() {
  return (
    <div className="App">
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Hi, I'm Cameron Thompson</h1>
          </div>
          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <a href="/">
                <div className="dots-wrapper">
                  <div id="dot-1" className="browser-dot"></div>
                  <div id="dot-2" className="browser-dot"></div>
                  <div id="dot-3" className="browser-dot"></div>
                </div>
              </a>


              <ul id="navigation">
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </div>

            <div className="left-column">
              <img id="profile_pic" alt='Picture of Cameron Thompson' src="./images/thompsonCameron.jpg" />
            </div>

            <div className="right-column">
              <div id="preview">
                <h3>What I Do</h3>
                <p>I am a student of Software Engineering with an emphasis in Web Development! </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>I work hard to learn new technologies but I found a few to stick to!</p>
              <hr />
              <h4>Top Technologies</h4>
              <p>Fullstack developer with primary focus on Node + React: <a target="_blank"
                href="./assets/resume.pdf">Download Resume</a></p>
              <div id="skills">
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>React</p>
                <p>MongoDB</p>

                <p>Express.js</p>
                <p>Heroku</p>
                <p>Netlify</p>
                <p>HTML/CSS</p>

                <p>JAM Stack (Learning)</p>
                <p>Serverless (Learning)</p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="social-links">
              <img id="social_img" allt="MERN image" src="./images/mern.jpg" />
              <h3>My Main Focus: <br />The MERN Stack</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="s1">
        <div className="main-container">
          <h3 style={{textAlign: "center"}}>Some of my latest projects</h3>
          <div className="post-wrapper" id="projects">

          </div>
        </div>

        <div className="main-container">
          <h3 style={{textAlign: "center"}}>Some of my latest articles</h3>
          <div className="post-wrapper" id="articles">

          </div>
        </div>
      </section>

      <div id="temp"></div>


      <footer>
        <img id="footerImg" alt="Cameron's Logo" src="./images/Dev.png" />
        <ul className="footerLinks">
          <li><a href="https://www.linkedin.com/in/cameron-thompson96/" target="_blank"
            rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/cdthomp1" target="_blank" rel="noopener noreferrer">Github</a></li>

          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </footer>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </div>
  );
}

export default App;
