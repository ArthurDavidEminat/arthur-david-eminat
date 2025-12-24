import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/procurement">Procurement</Link>
              </li>
              <li>
                <Link to="/trading">Trading</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Resumes</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/ArthurDEminat-ProcurementResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Procurement Resume
                </a>
              </li>
              <li>
                <a
                  href="/ArthurDavidEminat-TraderResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trading Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-david-eminat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="linkedin-icon"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Arthur David Eminat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
