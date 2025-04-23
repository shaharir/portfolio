import React from "react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item" title="HTML5">
              <FaHtml5 />
            </li>
            <li class="list-inline-item" title="CSS">
              <IoLogoCss3 />
            </li>
            <li class="list-inline-item" title="JavaScript">
              <SiJavascript />
            </li>
            <li className="list-inline-item" title="TypeScript">
              <SiTypescript />
            </li>
            <li class="list-inline-item" title="React.js">
              <FaReact />
            </li>
            <li class="list-inline-item" title="Next.js">
              <RiNextjsFill />
            </li>
            <li class="list-inline-item" title="Node.js">
              <DiNodejs />
            </li>
            <li class="list-inline-item" title="Express">
              <SiExpress />
            </li>
            <li class="list-inline-item" title="Nest.js">
              <SiNestjs />
            </li>
            <li class="list-inline-item" title="MongoDB">
              <SiMongodb />
            </li>
            <li class="list-inline-item" title="Python">
              <SiPython />
            </li>
            <li className="list-inline-item" title="C Programming">
              <div className="w-16 h-16 flex items-center justify-center rounded-full ">
                C
              </div>
            </li>
            <li class="list-inline-item" title="C++">
              <TbBrandCpp />
            </li>
          </ul>
          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Frontend Development
              <ul>
                <li>HTML5 & CSS: Build responsive and semantic web pages.</li>
                <li>
                  JavaScript & TypeScript: Enhance interactivity and add type
                  safety to the codebase.
                </li>
                <li>
                  React.js: Develop dynamic user interfaces with component-based
                  architecture.
                </li>
                <li>
                  Next.js: Create server-rendered React applications with
                  routing and performance optimization.
                </li>
              </ul>
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Backend Development
              <ul>
                <li>
                  Node.js & Express: Build RESTful APIs and handle server-side
                  logic.
                </li>
                <li>
                  MongoDB: Manage data with NoSQL databases, ensuring
                  flexibility and scalability.
                </li>
              </ul>
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Programming & Scripting
              <ul>
                <li>
                  Python: Automate tasks, build backend services, or work with
                  data science tools.
                </li>
                <li>
                  C Programming & C++: Write efficient, low-level code for
                  system programming or performance-critical applications.
                </li>
              </ul>
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Design & Testing
              <ul>
                <li>
                  Mobile-First, Responsive Design: Develop user interfaces that
                  work across all devices.
                </li>
                <li>
                  Cross-Browser Testing & Debugging: Ensure that the application
                  functions consistently across various browsers.
                </li>
              </ul>
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Collaboration & Development Methodologies
              <ul>
                <li>
                  Cross-Functional Teams: Collaborate effectively with design,
                  product, and backend teams to deliver solutions.
                </li>
                <li>
                  Agile Development & Scrum: Work in sprints, with iterative
                  feedback and collaboration in a flexible development
                  environment.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
