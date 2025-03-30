import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [error, setError] = useState(null);

  // Google Drive URL for viewing
  const resumePDF = "https://drive.google.com/file/d/1mrIJtlxStUSg_M9IcLWV115PDt1oT56m/preview";

  return (
    <section className="resume sec-pad" id="resume">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Resume</span>
          <span className="heading-sec__sub">
            My professional qualifications and experience
          </span>
        </h2>

        <div className="resume__content">
          <div className="resume__pdf-container">
            {error ? (
              <div className="pdf-error">
                {error}
                <p>Try these solutions:</p>
                <ul>
                  <li>Refresh the page</li>
                  <li>Check your internet connection</li>
                  <li>Verify the PDF link is accessible</li>
                </ul>
              </div>
            ) : (
              <iframe
                src={resumePDF}
                width="100%"
                height="800px"
                frameBorder="0"
                title="Bollapalli Manikanta's Resume"
                onError={() => setError("Failed to load resume preview")}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;