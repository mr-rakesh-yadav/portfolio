import React from "react";

import './styles.css'
const Contact = () => {
  return (
    <section className="contact py-6" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="contact-form">
              <h2 className="mb-4" style={{ fontFamily: "Georgia" }}>
                Get in touch
              </h2>
              <form
                action="https://formsubmit.co/rakesh.yadav_cs18@gla.ac.in"
                method="POST"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={6}
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    {/* <input onClick={() => alert('Great! Your info Submited Successfully')} type="submit" className="form-control submit-btn" value="Send"/> */}
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://er-rakesh-yadav.github.io/portfolio.github.io./"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
