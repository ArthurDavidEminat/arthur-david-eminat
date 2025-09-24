import "../styles/EducationPage.css";

function EducationPage() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-header">
              <h3 className="degree">
                Master of Business Administration (MBA)
              </h3>
              <span className="institution">
                Maharishi International University
              </span>
              <span className="duration">Feb 2025</span>
            </div>
            <div className="education-details">
              <p>
                <strong>Specialization:</strong> ERP & Business Analytics
              </p>
              <p>
                <strong>Focus Areas:</strong> Enterprise Resource Planning,
                Advanced Analytics, Business Intelligence, Data-driven Decision
                Making, Strategic Management
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h3 className="degree">
                Bachelor of Science in Procurement & Logistics Management
              </h3>
              <span className="institution">Uganda Christian University</span>
              <span className="duration">Dec 2012</span>
            </div>
            <div className="education-details">
              <p>
                <strong>Concentration:</strong> Data Analytics
              </p>
              <p>
                <strong>Key Coursework:</strong> Supply Chain Management,
                Procurement Strategy, Logistics Operations, Data Analysis,
                Statistical Methods, Business Process Optimization
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h3 className="degree">Professional Certifications</h3>
              <span className="institution">Various Institutions</span>
              <span className="duration">2015 - Present</span>
            </div>
            <div className="education-details">
              <ul className="certifications-list">
                <li>
                  Digital Asset 101 Professional Certificate - DEC Institute
                  (2025)
                </li>
                <li>
                  Chartered Alternative Investment Analyst (CAIA) - Level 1
                  (Ongoing)
                </li>
                <li>
                  Certified ESG Professional - Atton Institute, Dubai (2024)
                </li>
                <li>
                  Agile Project Management (Foundation & Practitioner) -
                  Johannesburg, South Africa (2019)
                </li>
                <li>
                  Chartered Institute of Procurement & Supply - UK Certified
                  Levels 4 & 5 (2015-2016)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationPage;
