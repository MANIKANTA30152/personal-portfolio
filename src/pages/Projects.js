import React from 'react';
import './Projects.css';
import indianCultureImg from '../assets/svg/indian-culture.jpg';
import scmsImg from '../assets/svg/scms.jpg';
import foodOrderImg from '../assets/svg/food-order.jpg';


const Projects = () => {
  const projects = [
    {
      title: "Indian Culture System",
      description: "Developed a user-friendly web application to promote Indian culture, heritage, and historical sites, featuring interactive virtual tours and educational content.",
      image: indianCultureImg,
      tags: ["React", "Node.js", "MongoDB", "Three.js"],
      link: "#"
    },
    {
      title: "Student Course Management System (SCMS)",
      description: "Built a full-stack Student Course Management System (SCMS) using the MERN stack to streamline course registration and management for students and faculty.",
      image: scmsImg,
      tags: ["MERN Stack", "Redux", "JWT Auth", "REST API"],
      link: "#"
    },
    {
      title: "Online Food Ordering System",
      description: "Developed a web-based application that allows customers to order food from restaurants and food establishments online.",
      image: foodOrderImg,
      tags: ["React", "Firebase", "Stripe API", "Google Maps API"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">My Projects</span>
          <span className="heading-sec__sub">
            Here you'll find some of my personal and professional projects that I've built.
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((project, index) => (
            <div className="projects__row" key={index}>
              <div className="projects__img-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="projects__img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <div className="projects__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projects__tag">{tag}</span>
                  ))}
                </div>
                <p className="projects__row-content-desc">
                  {project.description}
                </p>
                <div className="projects__links">
                  <a 
                    href={project.link} 
                    className="btn btn--med btn--theme projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.link} 
                    className="btn btn--med btn--theme-inv projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;