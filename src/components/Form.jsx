import InputField from "./InputField";
import "./Form.css";

export default function Form({ data, setData }) {
  const handleChange = (e) => {
    // Limit phone to 10 digits
    if (e.target.name === "phone" && e.target.value.length > 10) return;
    
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <h2>Enter Details</h2>

      <InputField
        type="text"
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleChange}
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <InputField
        type="tel"
        name="phone"
        placeholder="Phone (10 digits)"
        value={data.phone}
        onChange={handleChange}
      />

      <label className="input-label">Skills</label>
      <textarea
        name="skills"
        placeholder="e.g. React, JavaScript, AI..."
        value={data.skills}
        onChange={handleChange}
        className="textarea"
      />

      <label className="input-label">Education</label>
      <textarea
        name="education"
        placeholder="e.g. Bachelor of Computer Science..."
        value={data.education}
        onChange={handleChange}
        className="textarea"
      />
      <label className="input-label">Experience</label>
      <textarea
        name="experience"
        placeholder="e.g. Software Engineer at XYZ Corp..."
        value={data.experience}
        onChange={handleChange}
        className="textarea"
      />
    </div>
  );
}