import React from "react";

const Education = () => {
  return (
    <>
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Varendra University</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science </div>
              <p>GPA: 2.95</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">November 2023</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">Varendra Collage</h3>
              <div class="subheading mb-3">Science</div>
              <p>GPA: 4.25</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2016</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
