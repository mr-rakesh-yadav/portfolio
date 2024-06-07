import React from "react";

interface ProjectType {
  imgURL: string;
  label: string;
  link: string;
}
interface ProjectData {
  title: string;
  projects: ProjectType[];
}

const project: ProjectData = {
  title: "My contribution in digital-world",
  projects: [{ imgURL: "", label: "", link: "" }],
};
const Project = () => {
  const { title, projects } = project;
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>{title}</h2>
            </div>
            <div className="owl-carousel owl-theme">
              {projects.map((item, idx) => (
                <div className="item" key={`${item}_${idx}`}>
                  <div className="project-info">
                    <img
                      src={`${item.imgURL}`}
                      className="img-fluid"
                      alt={`${item.label}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
