function PersonalInfo({ onChange }) {
  const handleChange = (e) => {
    onChange(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Personal Info</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
    </div>
  );
}

export default PersonalInfo;
