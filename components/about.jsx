"use client"; // Required for interactivity in Next.js App Router

import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* About Image Section */}
          <div className="about-col-1">
            <img
              src="/tools/IMG_4890.jpeg"
              alt="Portfolio Owner"
            />
          </div>

          {/* About Content Section */}
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm a passionate Frontend Developer dedicated to crafting modern,
              interactive, and user-friendly web applications. With expertise in
              Next.js, React, and Tailwind CSS, I specialize in building sleek,
              responsive, and high-performance digital experiences.
            </p>

            {/* Tab Navigation */}
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            {/* Tab Content */}
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  I specialize in building fully custom websites tailored to
                  unique business needs, ensuring responsiveness, SEO-friendliness,
                  and seamless user experiences.
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul>
                <li>
                  <span>Internship</span>
                  <br />
                  At Brainycodes, I worked on real-world web development projects
                  using HTML, CSS, JavaScript, React, Node.js, and Next.js.
                  This internship shaped my understanding of frontend development.
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul>
                <li>
                  <span>2024</span>
                  <br />
                  Web Development at HoneyTreatAcademy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
