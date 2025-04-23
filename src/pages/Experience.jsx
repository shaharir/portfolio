import React from "react";

const Experience = () => {
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Frontend Software Developer</h3>
              <div className="subheading mb-3">Shunno IT</div>
              <p>
                At Shunno IT, I worked as a frontend software developer focusing
                on building responsive, user-friendly web interfaces using
                modern frontend technologies and frameworks. I collaborated with
                cross-functional teams to deliver scalable and maintainable UI
                components.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2024 - 2025</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Sales & Service Executive</h3>
              <div className="subheading mb-3">Unilever Pureit</div>
              <p>
                From 2022 to 2023, I was a part of Unilever Pureit team where I
                was involved in customer support and product promotion. My role
                included handling customer inquiries, assisting in product
                demonstrations, and ensuring customer satisfaction.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2022 - 2023</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
