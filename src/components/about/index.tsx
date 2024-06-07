import React from "react";

import "./styles.css";
import Image from "next/image";
import Link from "next/link";

interface AboutType {
  salutation: string;
  highlights: string[];
  description: string;
  resume: {
    path: string;
    label: string;
  };
  constact: {
    path: string;
    label: string;
  };
}

const about: AboutType = {
  salutation: "Hi!, I'm",
  highlights: ["Rakesh Yadav", "Frontend Developer", "ReactJs Developer"],
  description:
    "I am a passionate Frontend Developer with over 2 years of experience in creating dynamic and responsive web applications. My expertise lies in leveraging modern technologies like React, TypeScript, and JavaScript to design and develop user-friendly interfaces that enhance user experience and performance.",
  resume: {
    path: "/",
    label: "Download Resume",
  },
  constact: {
    path: "#contact",
    label: "Contact Me",
  },
};
const About = () => {
  const { salutation, highlights, description, resume, constact } = about;
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <h1 className="animated animated-text">
                <span className="mr-2">{salutation}</span>
                <div className="animated-info">
                  {highlights.map((item, idx) => (
                    <span key={`${item}_${idx}`} className="animated-item">
                      {item}
                    </span>
                  ))}
                </div>
              </h1>
              <p>{description}</p>
              <div className="custom-btn-group mt-4">
                <Link
                  href={`${resume.path}`}
                  className="btn mr-lg-2 custom-btn"
                >
                  <i className="uil uil-file-alt"></i>
                  {resume.label}
                </Link>
                <Link
                  href={`${constact.path}`}
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  {constact.label}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <Image
                src="/software_engineer.svg"
                className="img-fluid"
                alt="svg image"
                width={552}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
