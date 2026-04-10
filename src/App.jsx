import { useState, useEffect } from "react";
import Preview from "./components/Preview";
import "./App.css";

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState("modern");
  const templates = ["modern", "minimal", "executive", "elegant"];

  const [data, setData] = useState({
    name: "Luci ",
    role: "Full Stack Developer",
    email: "Luci@example.com",
    phone: "+212 600 000 000",
    location: "India,Mumbai",
    linkedin: "linkedin.com/in/Luci",
    summary: "Passionate Full Stack Developer with experience in building modern web applications using React, Node.js, and MySQL. Skilled in creating responsive UI, optimizing performance, and developing real-world projects like portfolio websites and resume builders. Interested in scalable applications and clean UI/UX design.",
    skills: "React, Node.js, JavaScript, HTML, CSS, MySQL, Git, Mongo DB, Express.js ",
    experience: "Self Projects - Full Stack Developer\n• Built a resume builder web app with real-time preview and PDF generation.\n• Developed a personal portfolio with responsive design and dynamic project sections.\n• Integrated frontend with backend using Node.js and MySQL.",
    projects: "Resume Builder - A React-based web app for creating professional resumes with live preview and export.\nPortfolio Website - A personal portfolio showcasing projects, skills, and contact information.",
    education: "Bachelor's Degree in Computer Science (Pursuing)",
    languages: "English (Fluent), Hindi (Native)"
  });



  // Function to reset the resume
  const handleReset = () => {
    if (window.confirm("Clear all data and start over?")) {
      setData({
        name: "Hamzaoui Amine",
        role: "Visual Computing Engineer",
        email: "amine@example.com",
        phone: "+212 600 000 000",
        location: "Casablanca, Morocco",
        linkedin: "linkedin.com/in/amine",
        summary: "Results-driven Visual Computing Engineer with expertise in Computer Vision and Full Stack development. Passionate about building seamless user experiences and AI-integrated web applications.",
        skills: "React, Node.js, Python, OpenCV, TensorFlow, SQL, Git",
        experience: "Tech Solutions - Software Engineer Intern\n• Developed real-time image processing modules.\n• Optimized React frontend for 30% faster load times.",
        projects: "AI Portfolio Designer - A React-based tool for real-time resume building using CSS grid systems.",
        education: "Engineering Degree in Visual Computing - 2026",
        languages: "Arabic (Native), English (Fluent), French (Professional)"
      });
    }
  };

  return (
    <div className="app-wrapper">
      <header className="app-header no-print">
        <h1 className="gradient-text">Resume Designer</h1>
        <p>Select a style and click any text to edit</p>

        <div className="template-navigation">
          <span className="nav-label">Template:</span>
          <div className="number-toggle">
            {templates.map((temp, index) => (
              <button
                key={temp}
                className={`num-btn ${activeTemplate === temp ? 'active' : ''}`}
                onClick={() => setActiveTemplate(temp)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="button-group">
            <button className="print-btn" onClick={() => window.print()}>
              Download PDF
            </button>
            <button className="reset-btn" onClick={handleReset}>↺</button>
          </div>
        </div>
      </header>

      <main className="single-layout">
        <section className={`resume-paper template-${activeTemplate}`}>
          <Preview data={data} setData={setData} activeTemplate={activeTemplate} />
        </section>
      </main>
    </div>
  );
}