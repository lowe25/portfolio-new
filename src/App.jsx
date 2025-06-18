/* eslint-disable react/no-unescaped-entities */
import "./scss/main.scss";

function App() {
  return (
    <>
      <section className="landing__mv">
        <div data-aos="zoom-in-down">
          <div className="landing__desc">
            <h1 className="landing__desc-heading">
              Hi there! I'm Louie and I'm a seasoned Front-End Developer
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
        </div>
      </section>

      <section className="landing__about" id="about">
        <div className="container">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">About</h1>
          </div>
          <div className="landing__about-desc" data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="1500">
            <img
              src="/img/profile.jpg"
              alt="Profile Picture"
              className="landing__about-img"
            />
            <span className="landing__about-txt">
              My name is Louieand I'm a Front-End Developer based in the Philippines with 3 years of experience in the industry, a proven track record of developing exceptional UI and translating wireframes into high-quality, responsive code Using PugJS, SCSS and TypeScript.
            </span>
          </div>

          <div className="landing__exp" data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1500">
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
                  <li className="landing__job-item">
                    Add functionality to static websites using WordPress plugins
                    ACF and MWWP Form.
                  </li>
                  <li className="landing__job-item">Optimized website load times by using Lazy Loading.</li>
                  <li className="landing__job-item">Working with version control systems and source code management tools (e.g., Use Git, GitLab) to keep track of code.</li>
                  <li className="landing__job-item"> Conducted code reviews with other developers to ensure adherence to coding standards and improve maintainability.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="landing__skills" data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <h2 className="landing__exp-heading">Skills</h2>
            <div className="landing__skills-wrap">
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/html.png"
                  alt="HTML Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/css.png"
                  alt="CSS Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/javascript.png"
                  alt="JavaScript Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/react-logo.png"
                  alt="HTML Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/pugjs.jpg"
                  alt="PugJs Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/sass.png"
                  alt="Scss Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/typescript.png"
                  alt="TypeScript Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/tailwind-logo.svg"
                  alt="TypeScript Logo"
                />
              </div>
              <div className="landing__skills-block">
                <img
                  className="landing__skills-img"
                  src="/img/github.png"
                  alt="github Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing__projects" id="projects">
        <div className="container" data-aos="zoom-in-down" data-aos-easing="linear"
          data-aos-duration="1500">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">Projects</h1>
          </div>
          <div className="landing__section-wrap landing__section-wrap--project">
            <div className="landing__project-blk">
              <span className="landing__tech-abt">Photography Website</span>
              <div className="landing__project-btn-wrap">
                <a
                  href="https://pensive-goodall-adf491.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="landing__project-btn"
                >
                  Demo
                </a>
              </div>

              <span className="landing__tech-abt">Written In:</span>
              <div className="landing__tech-wrap">
                <div className="landing__tech">
                  <img
                    src="./img/react-logo.png"
                    className="landing__tech-logo"
                    alt="ReactJs Logo"
                  />
                </div>
                <div className="landing__tech">
                  <img
                    src="./img/sass.png"
                    className="landing__tech-logo"
                    alt="SASS Image1"
                  />
                </div>
              </div>
            </div>

            <div className="landing__project-blk">
              <span className="landing__tech-abt">
                Internet Provider Website
              </span>
              <div className="landing__project-btn-wrap">
                <a
                  href="https://internet-provider-website-esco-htbvhondj-lowe25.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="landing__project-btn"
                >
                  Demo
                </a>
              </div>

              <span className="landing__tech-abt">Written In:</span>
              <div className="landing__tech-wrap">
                <div className="landing__tech">
                  <img
                    src="./img/react-logo.png"
                    className="landing__tech-logo"
                    alt="ReactJs Logo"
                  />
                </div>
                <div className="landing__tech">
                  <img
                    src="./img/sass.png"
                    className="landing__tech-logo"
                    alt="SASS Image1"
                  />
                </div>
              </div>
            </div>

            <div className="landing__project-blk">
              <span className="landing__tech-abt">
                Emman CCTV Website
              </span>
              <div className="landing__project-btn-wrap">
                <a
                  href="https://lowe25.github.io/company-landing/"
                  target="_blank"
                  rel="noreferrer"
                  className="landing__project-btn"
                >
                  Demo
                </a>
              </div>

              <span className="landing__tech-abt">Written In:</span>
              <div className="landing__tech-wrap">
                <div className="landing__tech">
                  <img
                    src="./img/react-logo.png"
                    className="landing__tech-logo"
                    alt="ReactJs Logo"
                  />
                </div>
                <div className="landing__tech">
                  <img
                    src="./img/tailwind-logo.svg"
                    className="landing__tech-logo"
                    alt="Tailwind CSS Logo"
                  />
                </div>
              </div>
            </div>

            <div className="landing__project-blk">
              <span className="landing__tech-abt">
                Biography Website
              </span>
              <div className="landing__project-btn-wrap">
                <a
                  href="https://biography-site.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="landing__project-btn"
                >
                  Demo
                </a>
              </div>

              <span className="landing__tech-abt">Written In:</span>
              <div className="landing__tech-wrap">
                <div className="landing__tech">
                  <img
                    src="./img/react-logo.png"
                    className="landing__tech-logo"
                    alt="ReactJs Logo"
                  />
                </div>
                <div className="landing__tech">
                  <img
                    src="./img/tailwind-logo.svg"
                    className="landing__tech-logo"
                    alt="Tailwind CSS Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing__contact" id="contacts">
        <div className="container" data-aos="zoom-in-down">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">Contact</h1>
          </div>
          <p className="landing__contact-txt">
            Let's get in touch!
          </p>
          <div className="landing__contact-wrap">
            <div className="landing__contact-block">
              <div>
                <img
                  className="landing__contact-logo"
                  src="/img/gmail.png"
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
                  src="/img/linkedin.png"
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
                  src="/img/smartphone.png"
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
          <h2>Copyright 2025. All rights reserved.</h2>
        </div>
      </footer>
    </>
  );
}

export default App;
