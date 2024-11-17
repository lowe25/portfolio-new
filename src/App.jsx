import "./scss/main.scss";

function App() {
  return (
    <>
      <section className="landing__mv">
        <div className="landing__desc">
          <h1 className="landing__desc-heading">
            Hi My Name is Louie Aldrin Cabral Im a Front End Developer
          </h1>
        </div>
        <div className="landing__nav">
          <a href="#about" className="landing__nav-link">
            About
          </a>
          <a href="#projects" className="landing__nav-link">
            Projects
          </a>
          <a href="#contacts" className="landing__nav-link">
            Contact
          </a>
        </div>
      </section>

      <section className="landing__about" id="about">
        <div className="container">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">About</h1>
          </div>
          <div className="landing__about-desc">
            <img
              src="/public/img/profile.jpg"
              alt="Profile Picture"
              className="landing__about-img"
            />
            <span className="landing__about-txt">
              My name is Louie Aldrin Cabral and Im a Front End Developer based
              in the Philippines with three years of experience in the industry,
              A proven track record of developing exceptional UI and translating
              wireframes into high-quality, responsive code Using PugJS, SCSS
              and TypeScript.
            </span>
          </div>

          <div className="landing__exp">
            <h2 className="landing__exp-heading">Work Experince</h2>
            <div className="landing__exp-box">
              <div className="landing__job">
                <span className="landing__job-type">
                  Front End Engineer / Upward Next Inc
                </span>
                <span className="landing__job-date">Aug 2022 - Present</span>
              </div>
              <div className="landing__job-desc">
                <ul className="landing__job-list">
                  <li className="landing__job-item">
                    Translate Adobe XD/ Illustrator and Figma designs into
                    responsive static websites. Using PugJs, SASS and
                    TypeScript.
                  </li>

                  <li>
                    Add functionality to static websites using WordPress plugins
                    ACF and MWWP Form.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="landing__skills">
            <h2 className="landing__exp-heading">Skills</h2>
            <div className="landing__skills-wrap">
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/html.png"
                  alt="HTML Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/css.png"
                  alt="CSS Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/javascript.png"
                  alt="JavaScript Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/react-logo.png"
                  alt="HTML Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/pugjs.jpg"
                  alt="PugJs Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/sass.png"
                  alt="Scss Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/typescript.png"
                  alt="TypeScript Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/public/img/github.png"
                  alt="github Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing__projects" id="projects">
        <div className="container">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">Projects</h1>
          </div>
        </div>
      </section>

      <section className="landing__contact" id="contacts">
        <div className="container">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">Contact</h1>
          </div>
          <p className="landing__contact-txt">
            Lets get in touch you can reach out to me by clicking below
          </p>
          <div className="landing__contact-wrap">
            <div className="landing__contact-block">
              <div>
                <img
                  className="landing__contact-logo"
                  src="/public/img/gmail.png"
                  alt="Gmail Logo"
                />
              </div>
              <a
                href="mailto: louiealdrin25@gmail.com"
                className="landing__contact-link-txt"
              >
                louiealdrin25@gmail.com
              </a>
            </div>
            <div className="landing__contact-block">
              <div>
                <img
                  className="landing__contact-logo"
                  src="/public/img/linkedin.png"
                  alt="Linkedin Logo"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/louie-aldrin-cabral-992040194/"
                target="_blank"
                className="landing__contact-link-txt"
              >
                https://www.linkedin.com/in/louie-aldrin-cabral/
              </a>
            </div>
            <div className="landing__contact-block">
              <div>
                <img
                  className="landing__contact-logo landing__contact-logo--img2"
                  src="/public/img/smartphone1.png"
                  alt="Smartphone Logo"
                />
              </div>
              <a href="tel: 09064935258" className="landing__contact-link-txt">
                09064935258
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <h2>Copyright 2024. Allright reserved</h2>
          <br />
          <p className="footer__txt"> Icons made Freepik</p>
          <br />
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            className="footer__link"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
