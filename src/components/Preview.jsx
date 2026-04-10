import "./Preview.css";

export default function Preview({ data, setData, activeTemplate }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={`preview-container template-${activeTemplate}`}>
      <header className="resume-header">
        <div className="header-content">
          <input className="inline-input user-name" name="name" value={data.name} onChange={handleChange} />
          <input className="inline-input user-role" name="role" value={data.role} onChange={handleChange} />
        </div>
        <div className="contact-info">
          <input className="inline-input" name="email" value={data.email} onChange={handleChange} />
          <input className="inline-input" name="phone" value={data.phone} onChange={handleChange} />
          <input className="inline-input" name="location" value={data.location} onChange={handleChange} />
        </div>
      </header>

      <div className="resume-body">
        <div className="main-col">
          <section className="resume-section">
            <h3 className="section-title">Summary</h3>
            <textarea className="inline-textarea" name="summary" value={data.summary} onChange={handleChange} rows={3} />
          </section>

          <section className="resume-section">
            <h3 className="section-title">Experience</h3>
            <textarea className="inline-textarea" name="experience" value={data.experience} onChange={handleChange} rows={5} />
          </section>

          <section className="resume-section">
            <h3 className="section-title">Projects</h3>
            <textarea className="inline-textarea" name="projects" value={data.projects} onChange={handleChange} rows={4} />
          </section>
        </div>

        <div className="side-col">
          <section className="resume-section">
            <h3 className="section-title">Technical Skills</h3>
            <textarea className="inline-textarea" name="skills" value={data.skills} onChange={handleChange} rows={5} />
          </section>

          <section className="resume-section">
            <h3 className="section-title">Education</h3>
            <textarea className="inline-textarea" name="education" value={data.education} onChange={handleChange} rows={3} />
          </section>

          <section className="resume-section">
            <h3 className="section-title">Languages</h3>
            <textarea className="inline-textarea" name="languages" value={data.languages} onChange={handleChange} rows={3} />
          </section>
        </div>
      </div>
    </div>
  );
}