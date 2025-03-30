import React from 'react';
import { Link } from 'react-scroll';
import githubLogo from '../assets/svg/github.png';
import linkedinLogo from '../assets/svg/linkedin.png';
import codechefLogo from '../assets/svg/codechef.png';
import ChatBot from '../components/ChatBot';

const Home = () => {
  return (
    <section className="home-hero" id="home">
      {/* Left-Side Navbar with Social Icons */}
      <div className="home-hero__socials">
        <a
          href="https://github.com/MANIKANTA30152"
          target="_blank"
          rel="noopener noreferrer"
          className="home-hero__social-icon-link"
        >
          <img
            src={githubLogo}
            alt="GitHub"
            className="home-hero__social-icon"
          />
        </a>
        <a
          href="https://linkedin.com/in/bollapalli-manikanta-67935b28b"
          target="_blank"
          rel="noopener noreferrer"
          className="home-hero__social-icon-link"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="home-hero__social-icon"
          />
        </a>
        <a
          href="https://www.codechef.com/users/klu_220030152"
          target="_blank"
          rel="noopener noreferrer"
          className="home-hero__social-icon-link"
        >
          <img
            src={codechefLogo}
            alt="CodeChef"
            className="home-hero__social-icon"
          />
        </a>
      </div>

      {/* Main Content */}
      <div className="home-hero__content">
        <h1 className="heading-primary">Bollapalli Manikanta</h1>
        <p className="home-hero__info">
          A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
        </p>
        <div className="home-hero__cta">
          <Link
            to="projects"
            smooth={true}
            duration={10}
            offset={-80}
            spy={true}
            exact="true"
            className="btn btn--bg"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* ChatBot Component - Will appear as floating button in bottom right */}
      <ChatBot />
    </section>
  );
};

export default Home;