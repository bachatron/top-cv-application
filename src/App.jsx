import { useState } from 'react';
import './App.css';

import CVForm from './components/CVForm';

function App() {
  const [cvInfo, setCvInfo] = useState(null);

  const handleCvInfoSubmit = (info) => {
    setCvInfo(info);
  };

  console.log('cvInfo:', cvInfo);

  return (
    <div>
      <h1>CV Generator</h1>
      <CVForm onSubmit={handleCvInfoSubmit} />

      {cvInfo && (
        <div>
          <h2>Preview</h2>

          <div>
            <p><strong>Name:</strong> {cvInfo.name}</p>
            <p><strong>Email:</strong> {cvInfo.email}</p>
            <p><strong>Phone:</strong> {cvInfo.phone}</p>
          </div>

          <div>
            <p><strong>School Name:</strong> {cvInfo.schoolName}</p>
            <p><strong>Title of Study:</strong> {cvInfo.titleOfStudy}</p>
            <p><strong>Date of Finished Study:</strong> {cvInfo.dateOfStudy}</p>
          </div>

          <div>
            <p><strong>Company Name:</strong> {cvInfo.companyName}</p>
            <p><strong>Position Title:</strong> {cvInfo.positionTitle}</p>
            <p><strong>Main Responsibilities:</strong> {cvInfo.responsibilities}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
