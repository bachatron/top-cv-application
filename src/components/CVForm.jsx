import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

function CVForm({ onSubmit }) {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...personalInfo,
      ...education,
      ...experience,
    };
    onSubmit(fullData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfo onChange={setPersonalInfo} />
      <Education onChange={setEducation} />
      <Experience onChange={setExperience} />
      <button type="submit">Generate CV</button>
    </form>
  );
}

export default CVForm;
