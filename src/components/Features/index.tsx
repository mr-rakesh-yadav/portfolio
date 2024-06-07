import React from "react";

import "./styles.css";

interface Experience {
  year: string;
  title: string;
  subTitle: string;
  about: string;
}
const experianceDetail: Experience[] = [
  {
    year: "2022-Present",
    title: "Assosiate Software Engineer",
    subTitle: "Daffodil Software",
    about: "...",
  },
  {
    year: "2020-2022",
    title: "Technical Support Freelancer",
    subTitle: "",
    about: "This journey started from my local-town schools and colleges.",
  },
  {
    year: "2020",
    title: "IIoT Intern",
    subTitle: "DCS Pvt. Ltd.",
    about:
      "Worked with DCS team at a project - Water Management System Using IoT.",
  },
];

const educationDetail: Experience[] = [
  {
    year: "2018-2022",
    title: "GLA University",
    subTitle: "BACHELOR OF TECHNOLOGY",
    about: "Computer Science and Engineering",
  },
  {
    year: "2016-2018",
    title: "RLB Memorial School",
    subTitle: "INTERMEDIATE",
    about: "Science Stream - PCM(Physics,Chemistry,Maths)",
  },
  {
    year: "2016",
    title: "RLB Memorial School",
    subTitle: "HIGH SCHOOL",
    about: "Science Stream",
  },
];

const ProgressCard = ({ heading = "" }) => {
  return (
    <div className="col-lg-6 col-12">
      <h2 className="mb-4">{heading}</h2>
      <div className="timeline">
        {experianceDetail.map((experience: Experience) => (
          <>
            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>{experience.year}</span>
              </div>
              <div className="timeline-info">
                <h3>
                  <span>{experience.title}</span>
                  <small>{experience.subTitle}</small>
                </h3>
                <p>{experience.about}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <ProgressCard heading="Experiences" />
          <ProgressCard heading="Education" />
        </div>
      </div>
    </section>
  );
};

export default Features;
