function Education({ onChange }) {
  const handleChange = (e) => {
    onChange(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Education Info</h2>
      <input name="schoolName" placeholder="School Name" onChange={handleChange} />
      <input name="titleOfStudy" placeholder="Title of Study" onChange={handleChange} />
      <input type='date' name="dateOfStudy" placeholder="Date of finished studies" onChange={handleChange} />
    </div>
  );
}

export default Education;