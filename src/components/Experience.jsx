function Experience({ onChange }) {
  const handleChange = (e) => {
    onChange(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Experience Info</h2>
      <input name="companyName" placeholder="Company name" onChange={handleChange} />
      <input name="positionTitle" placeholder="Position Title" onChange={handleChange} />
      <input name="responsibilities" placeholder="Main responsabilities" onChange={handleChange} />
    </div>
  );
}

export default Experience;