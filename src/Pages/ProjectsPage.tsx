import "../styles/ProjectsPage.css";

function ProjectsPage() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-item featured">
            <div className="project-header">
              <h3 className="project-title">
                Skyfall - Enterprise System Replacement
              </h3>
              <span className="project-status">Featured Project</span>
            </div>
            <p className="project-description">
              Led the replacement of JDE with a new system supporting
              parameterized products, software as a service, data as a service,
              agency integration, and developer ecosystem readiness. Delivered
              80% process efficiency improvement through AI-powered solutions.
            </p>
            <ul className="project-tech">
              <li>Enterprise Architecture</li>
              <li>SAP Integration</li>
              <li>AI & Machine Learning</li>
              <li>Cloud Migration</li>
              <li>API Development</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                Treadstone - Mobile & Web Analytics Platform
              </h3>
              <span className="project-status">2018-2020</span>
            </div>
            <p className="project-description">
              Rebuilt mobile and web applications into analytics engines and
              personal assistants to drive engagement. Created comprehensive
              analytics platform with real-time insights and user engagement
              optimization.
            </p>
            <ul className="project-tech">
              <li>React Native</li>
              <li>Web Analytics</li>
              <li>Data Visualization</li>
              <li>User Experience</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                Alexa - Benefits STP with Machine Learning
              </h3>
              <span className="project-status">2018-2019</span>
            </div>
            <p className="project-description">
              Implemented a benefits straight-through process powered by machine
              learning, automating benefit claims processing and reducing manual
              intervention by 80%. Integrated with Microsoft AI solutions for
              enhanced accuracy.
            </p>
            <ul className="project-tech">
              <li>Machine Learning</li>
              <li>Microsoft AI</li>
              <li>Process Automation</li>
              <li>Benefits Processing</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                Thunderball - Multi-Payment Platform
              </h3>
              <span className="project-status">2018-2020</span>
            </div>
            <p className="project-description">
              Developed a comprehensive payment platform accepting various
              payment methods and agent networks for both incoming and outgoing
              transactions. Integrated multiple payment gateways and blockchain
              solutions including Bitcoin.
            </p>
            <ul className="project-tech">
              <li>Payment Processing</li>
              <li>Blockchain Integration</li>
              <li>API Development</li>
              <li>Financial Technology</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                Abatis - Knowledge Management System
              </h3>
              <span className="project-status">2018-2020</span>
            </div>
            <p className="project-description">
              Fostered internal customer self-service powered by democratization
              of knowledge and search. Created comprehensive knowledge base
              reducing help desk requests by 80% through intelligent search and
              automated resolution.
            </p>
            <ul className="project-tech">
              <li>Knowledge Management</li>
              <li>Search Technology</li>
              <li>Self-Service Portal</li>
              <li>AI-Powered Search</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                Digital Asset Portfolio Management
              </h3>
              <span className="project-status">2020-2025</span>
            </div>
            <p className="project-description">
              Managed multi-million dollar digital asset strategies across
              Stablecoins, Layer 1/2 (Ethereum, Solana), DeFi, and RWAs.
              Delivered consistent double-digit returns through systematic risk
              management and AI-driven sentiment analysis.
            </p>
            <ul className="project-tech">
              <li>Digital Assets</li>
              <li>DeFi Protocols</li>
              <li>Blockchain Analytics</li>
              <li>Portfolio Optimization</li>
            </ul>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
