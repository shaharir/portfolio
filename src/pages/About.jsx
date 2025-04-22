import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start position-relative text-center text-md-start">
            <h1 className="mb-3 mb-md-0">
              Shahariar <span className="text-primary ms-md-4">Sumon</span>
            </h1>
            <button
              className="btn mt-2 mt-md-0 ms-md-auto text-white"
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                fontWeight: "bold",
                backgroundColor: "#CD552A",
              }}
              onClick={() => navigate("/hire")}
            >
              Hire Me
            </button>
          </div>

          <div className="subheading mb-5">
            Enathpur · Manda · Naogaon ·Rajshahi · Bangladesh
            Call:+8801304396737·
            <a href="shaharir.cse@email.com">shaharir.cse@email.com</a>
          </div>
          <p>English (Fluent), Bengali (Native)</p>
          <h3 className="text-primary">Hobbies:</h3>
          <ul>
            <li>Coding and Learning New Technologies</li>
            <li>Reading Tech Blogs and Articles</li>
            <li>Travelling and Exploring New Places</li>
          </ul>
          <p className="lead mb-5">
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="social-icons">
            <a className="social-icon linkedin" href="#!">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="social-icon github" href="#!">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="social-icon twitter" href="#!">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="social-icon facebook" href="#!">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
