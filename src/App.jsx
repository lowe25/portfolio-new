/* eslint-disable react/no-unescaped-entities */
import "./scss/main.scss";
import Tech from "./components/Tech";

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
            <div className="landing__skills-blk">
              <h2 className="landing__exp-heading">Front End</h2>
              <ul className="landing__skills-list">
                <Tech techImg={'html.png'} techAlt={'HTML Logo'} tech={'HTML'} />
                <Tech techImg={'css.png'} techAlt={'CSS Logo'} tech={'CSS'} />
                <Tech techImg={'javascript.png'} techAlt={'JavaScript Logo'} tech={'JavaScript'} />
                <Tech techImg={'react-logo.png'} techAlt={'ReactJS Logo'} tech={'ReactJS'} />
                <Tech techImg={'pugjs.jpg'} techAlt={'PugJS Logo'} tech={'PugJS'} />
                <Tech techImg={'sass.png'} techAlt={'SCSS Logo'} tech={'SASS'} />
                <Tech techImg={'tailwind-logo.svg'} techAlt={'Tailwind Logo'} tech={'Tailwind CSS'} />
                <Tech techImg={'wordpress.png'} techAlt={'WordPress Logo'} tech={'Wordpress'} />

              </ul>
            </div>

            <div className="landing__skills-blk">
              <h2 className="landing__exp-heading">Tools</h2>
              <div className="landing__skills-wrap">
                <ul className="landing__skills-list">
                  <Tech techImg={'git.png'} techAlt={'Git Logo'} tech={'Git'} />
                  <Tech techImg={'github.png'} techAlt={'Github Logo'} tech={'Github'} />
                  <Tech techImg={'gitlab.png'} techAlt={'Gitlab Logo'} tech={'Gitlab'} />
                  <Tech techImg={'vscode.png'} techAlt={'Vscode Logo'} tech={'Vscode'} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing__projects" id="projects">
        <div className="container">
          <div className="landing__section-wrap">
            <h1 className="landing__section-title">Featured Projects</h1>
          </div>
          <div className="landing__section-wrap landing__section-wrap--project">
            <article className="landing__project-blk" data-aos="fade-left" data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="landing__project-col">
                <div className="landing__test">
                  <span className="landing__tech-abt">SMICA</span>
                  <div>
                    <p className="landing__tech-txt">A clean and responsive real estate website built using modern web design principles. It features listing previews, company details, and contact sections—offering visitors an intuitive browsing experience while showcasing services and properties clearly.</p>
                  </div>
                  <div>
                    <ul className="landing__tech-wrap">
                      <Tech techImg={'pugjs.jpg'} techAlt={'PugJS Logo'} tech={'Pug JS'} />
                      <Tech techImg={'sass.png'} techAlt={'SCSS Logo'} tech={'SASS/SCSS'} />
                      <Tech techImg={'typescript.png'} techAlt={'TypeScript Logo'} tech={'TypeScript'} />
                      <Tech techImg={'wordpress.png'} techAlt={'WordPress Logo'} tech={'Wordpress'} />
                    </ul>
                  </div>
                </div>
                <div className="landing__project-img-wrap">
                  <img className="landing__img" src="/img/smica.png" alt="SMICA Landing" />
                </div>
              </div>
            </article>

            <article className="landing__project-blk" data-aos="fade-right" data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="landing__project-col">
                <div className="landing__test">
                  <span className="landing__tech-abt">Secom</span>
                  <div>
                    <p className="landing__tech-txt">This comic-style recruitment website was designed to creatively communicate SECOM’s mission, work culture, and employee experiences. It uses engaging illustrations and storytelling to attract potential candidates and make complex information accessible and fun.</p>
                  </div>
                  <div>
                    <ul className="landing__tech-wrap">
                      <Tech techImg={'pugjs.jpg'} techAlt={'Pug JS Logo'} tech={'Pug JS'} />
                      <Tech techImg={'sass.png'} techAlt={'SCSS Logo'} tech={'SASS/SCSS'} />
                      <Tech techImg={'typescript.png'} techAlt={'TypeScript Logo'} tech={'TypeScript'} />
                    </ul>
                  </div>
                </div>
                <div className="landing__project-img-wrap">
                  <img className="landing__img" src="/img/secom.png" alt="Secom Landing" />
                </div>
              </div>
            </article>
          </div>

          <div className="landing__section-other-proj">
            <div className="landing__section-wrap">
              <h1 className="landing__section-title">Personal Projects</h1>
            </div>
            <div className="landing__proj-wrap" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="1500">
              <article className="landing__project-blk">
                <div className="landing__project-other-wrap">
                  <a href="https://lowe25.github.io/company-landing/" target="_blank" rel="noopener noreferrer">
                    <img className="landing__img2" src="/img/emman-cctv.png" alt="Emman CCTV Landing" />
                  </a>
                </div>
                <span className="landing__tech-abt">
                  Emman CCTV Website
                </span>
                <ul className="landing__tech-wrap">
                  <li className="landing__tech">
                    <img
                      src="./img/react-logo.png"
                      className="landing__tech-logo"
                      alt="ReactJS Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">React JS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/tailwind-logo.svg"
                      className="landing__tech-logo"
                      alt="Tailwind Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">Tailwind CSS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/typescript.png"
                      className="landing__tech-logo"
                      alt="TypeScript Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">TypeScript</p>
                  </li>
                </ul>
              </article>

              <article className="landing__project-blk">
                <div className="landing__project-other-wrap">
                  <a href="https://biography-site.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img className="landing__img2" src="/img/biblography.png" alt="Biography Site" />
                  </a>
                </div>
                <span className="landing__tech-abt">
                  Biography Website
                </span>
                <ul className="landing__tech-wrap ">
                  <li className="landing__tech">
                    <img
                      src="./img/react-logo.png"
                      className="landing__tech-logo"
                      alt="ReactJS Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">React JS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/tailwind-logo.svg"
                      className="landing__tech-logo"
                      alt="Tailwind Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">Tailwind CSS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/typescript.png"
                      className="landing__tech-logo"
                      alt="TypeScript Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">TypeScript</p>
                  </li>
                </ul>
              </article>

              <article className="landing__project-blk">
                <div className="landing__project-other-wrap">
                  <a href="https://acme-real-estate.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img className="landing__img2" src="/img/acme.png" alt="Acme Realestate" />
                  </a>
                </div>
                <span className="landing__tech-abt">
                  ACME Real Estate Website
                </span>
                <ul className="landing__tech-wrap">
                  <li className="landing__tech">
                    <img
                      src="./img/react-logo.png"
                      className="landing__tech-logo"
                      alt="ReactJS Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">React JS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/tailwind-logo.svg"
                      className="landing__tech-logo"
                      alt="Tailwind Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">Tailwind CSS</p>

                  </li>
                  <li className="landing__tech">
                    <img
                      src="./img/typescript.png"
                      className="landing__tech-logo"
                      alt="TypeScript Logo"
                    />
                    <p className="landing__tech-txt landing__tech-txt--lang">TypeScript</p>
                  </li>
                </ul>
              </article>
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
          <div className="landing__contact-btn">
            <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer" className="landing__nav-link">
              View Resume
            </a>
          </div>
          <div className="landing__contact-wrap">
            <div className="landing__contact-block">
              <a
                href="mailto:louiealdrin25@gmail.com"
                rel="noopener noreferrer"
                className="landing__contact-link-txt"
              >
                <img
                  className="landing__contact-logo"
                  src="/img/gmail.png"
                  alt="Gmail Logo"
                />
              </a>
            </div>
            <div className="landing__contact-block">
              <a
                href="https://www.linkedin.com/in/louie-aldrin-cabral/"
                target="_blank"
                className="landing__contact-link-txt"
              >
                <img
                  className="landing__contact-logo"
                  src="/img/linkedin.png"
                  alt="Linkedin Logo"
                />
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
